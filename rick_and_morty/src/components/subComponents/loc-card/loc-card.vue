<template lang="">
    <router-link class="loc-card" :to="{ path: `/location/${data.id}` }">
        <div class="loc-card__info">
            <div class="loc-card__info__item">
                <strong>name:</strong> {{ data.name }}
            </div>
            <div class="loc-card__info__item">
                <strong>type:</strong> {{ data.type }}
            </div>
            <div class="loc-card__info__item">
                <strong>dimension:</strong> {{ data.dimension }}
            </div>
            <div class="loc-card__info__item">
                <strong>created:</strong> {{ data.created }}
            </div>
        </div>
    </router-link>
</template>
<script>
export default {
    name: 'loc-card',
    props: {
        data: {},
    }
}
</script>
<style lang="scss" scoped src="./loc-card.scss">
    
</style>