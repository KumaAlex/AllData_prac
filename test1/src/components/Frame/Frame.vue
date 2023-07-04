<template>
    <div class="frame">
        <div class="frame__logo">
            <img :src="require(`@/assets${img}`)" alt="" class="frame__logo-img">
        </div>
        <div v-if="name" class="frame__name">
            <h3 class="frame__name-txt">
                {{ name }}
            </h3>
        </div>
        <div class="frame__description">
            {{ text }}
        </div>
    </div>
</template>
<script>
export default {
    name: "FrameComp",
    props: {
        img: {
            type: String,
            default: ''
        },
        name: {
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
<style lang="scss" src="./Frame.scss" scoped>
    
</style>