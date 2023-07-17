<template lang="">
    <router-link class="char-card" :to="{ path: `/character/${data.id}` }">
        <imageTool class="char-card__img" :imgURL='data.image' />
        <div class="char-card__info">
            <div class="char-card__info__item">
                <h1 class="char-card__info__item">{{ data.name }}</h1> 
            </div>
            <div class="char-card__info__item">
                {{ data.status }} - {{ data.species }} - {{ data.gender }}
            </div>
            <div v-if="data.location" class="char-card__info__item">
                <p class="char-card__info__item-key">Last known location:</p> 
                {{ data.location.name }}
            </div>
            <div v-if="data.origin" class="char-card__info__item">
                <p class="char-card__info__item-key">First seen in:</p>  {{ data.origin.name }}
            </div>
        </div>
    </router-link>
</template>
<script>
import imageTool from '../../common-tool/image/image.vue';
export default {
    name: 'char-card',
    components: {
        imageTool,
    },
    props: {
        data: {}
    }
}
</script>
<style lang="scss" scoped src="./char-card.scss">
    
</style>