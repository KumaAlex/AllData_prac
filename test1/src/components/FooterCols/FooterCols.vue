<template>
    <div class="FooterCols">
        <div class="FooterCols__list" v-for="item in col" :key="item.id">
            <div v-if="item.imgs" class="FooterCols__list-item">
                <div v-for="img in item.imgs" :key="img.id" class="FooterCols__list-item-imgs">
                    <img :src="require(`@/assets${img.imgURL}`)" alt="">
                </div>
            </div>
            <div v-else class="FooterCols__list-item">
                <router-link v-if="item.strong" to="/" class="FooterCols__list-item-router"><strong>{{ item.text }}</strong> </router-link>
                <router-link v-else to="/" class="FooterCols__list-item-router"> {{ item.text }} </router-link>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: "FooterCols",
    props: {
        col: {
            type: Array,
        }
    }    
}
</script>


<style lang="scss" src="./FooterCols.scss">
    
</style>