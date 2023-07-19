<template lang="">
    <div class="char-card">
        <imageTool class="char-card__img" :imgURL='data.image' />
        <div class="char-card__info">
            <router-link :to="{ path: `/character/${data.id}` }" class="char-card__router">
                <h1>{{ data.name }}</h1> 
            </router-link>
            <div>
                <span class="char-card__info__status-alive" v-if="data.status === 'Alive'"> + </span>
                <span class="char-card__info__status-dead" v-else-if="data.status === 'Dead'"> + </span>
                <span class="char-card__info__status-unknown" v-else-if="data.status === 'unknown'"> + </span>
                {{ data.status }} - {{ data.species }} - {{ data.gender }}
            </div>
            <div v-if="data.location">
                <p class="char-card__info__item-key">Last known location:</p> 
                {{ data.location.name }}
            </div>
            <div v-if="data.origin">
                <p class="char-card__info__item-key">First seen in:</p>  {{ data.origin.name }}
            </div>
        </div>
    </div>
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