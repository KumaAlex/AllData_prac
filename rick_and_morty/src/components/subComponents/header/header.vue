<template lang="">
    <div class="header">
        <div class="header__nav">
            <imageTool class="header__nav-logo" :imgURL="logoURL" />

            <div class="header__nav__links">
                <routerLink to="/location" class="header__nav__link-item">location</routerLink>
                <routerLink to="/episode" class="header__nav__link-item">episode</routerLink>
                <routerLink to="/character" class="header__nav__link-item">character</routerLink>
            </div>

            <div class="header__nav__btns">
                <btnTool class="header__nav__btn-left">Docs</btnTool>
                <btnTool class="header__nav__btn-left">About</btnTool>
                <btnTool class="header__nav__btn-right">SUPPORT US</btnTool>
            </div>
        </div>
        <img class="header__bottomIMG" :src="headerBottomIMG" />

        <div class="header__bottom-links">
            <routerLink to="/location" class="header__nav__link-item">location</routerLink>
            <routerLink to="/episode" class="header__nav__link-item">episode</routerLink>
            <routerLink to="/character" class="header__nav__link-item">character</routerLink>
        </div>
    </div>
</template>
<script>
    import imageTool from '@/components/common-tool/image/image'
    import btnTool from '@/components/common-tool/btn/btn'

    export default {
        name: "header-comp",
        components: {
            imageTool,
            btnTool,
        },
        data() {
            return {
                logoURL: "https://play-lh.googleusercontent.com/yfiIOdk6OF5T_ekvwQKSTjnP0ZQwGDbqXUQp6oBgqmFSX86xAfBEaEG3xCOBCtMjCA=w240-h480-rw",
                headerBottomIMG: "https://www.pngplay.com/wp-content/uploads/14/Rick-And-Morty-Logo-Transparent-File.png",
            }
        }
    }
</script>
<style lang="scss" scoped src="./header.scss">
</style>