<template lang="">
    <router-link class="epis-card" :to="{ path: `/episode/${data.id}` }">
        <div class="epis-card__info">
            <div class="epis-card__info__item">
                <strong>name:</strong> {{ data.name }}
            </div>
            <div class="epis-card__info__item">
                <strong>air_date:</strong> {{ data.air_date }}
            </div>
            <div class="epis-card__info__item">
                <strong>episode:</strong> {{ data.episode }}
            </div>
            <div class="epis-card__info__item">
                <strong>created:</strong> {{ data.created }}
            </div>
        </div>
    </router-link>
</template>
<script>
export default {
    name: "epis-card",
    props: {
        data: {}
    },
    methods: {

    },
}
</script>
<style lang="scss" scoped src="./epis-card.scss">
    
</style>