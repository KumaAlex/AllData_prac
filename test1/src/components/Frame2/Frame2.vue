<template>
    <div class="frame2">
        <div class="frame2__logo">
            <img :src="require(`@/assets${img}`)" alt="" class="frame2__logo-img">
        </div>
        <div class="frame2__description">
            {{ text }}
        </div>
    </div>
</template>
<script>
export default {
    name: "Frame2Comp",
    props: {
        img: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: '' 
        }
    }
}
</script>
<style lang="scss" src="./Frame2.scss" scoped>
    
</style>