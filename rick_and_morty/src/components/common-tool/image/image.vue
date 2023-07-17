<template lang="">
    <img class="image-tool" :src="imgURL" />
</template>
<script>
export default {
    name: 'image-tool',
    props: {
        imgURL: {
            type: String,
            default: ''
        }
    }
}
</script>
<style lang="scss" scoped src="./image.scss">
    
</style>