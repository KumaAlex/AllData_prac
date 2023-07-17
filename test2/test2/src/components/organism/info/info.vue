<template lang="">
    <div class="info">
        <div class="info__content">
            <div class="info__content__images">
                <imageAtom class="info__content__image-left image_text_gradient">asdasd</imageAtom>
                <imageAtom class="info__content__image-right image_text_gradient">asdasd</imageAtom>
            </div>

            <div class="info__content__text">
                <div class="info__content__text-topic">Что Вас интересует сегодня?</div>
                <div class="info__content__text-description">Здесь Вы найдете домашний персонал, который поможет Вам организовать
                    уют и порядок в доме!</div>
            </div>
        </div>
    </div>
</template>
<script>
    import imageAtom from '@/components/atoms/image/image.vue'
    export default {
        name: 'info-organism',
        components: {
            imageAtom,
        },
    }
</script>
<style lang="scss" scoped src="./info.scss">
    @import url('@/components/atoms/image/image_gradient.scss');
</style>