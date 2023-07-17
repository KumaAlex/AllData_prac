<template lang="">    
    <div class="card">
        <div class="card-img">
            <!-- <img :src="require(`@/assets/main/cards/${img}`)" alt="" /> -->
            <img class="card-img__image" v-if="img.length" :src="require(`@/assets${img}`)" alt="" />
        </div>
        <div class="card-text">
            {{value}}
        </div>
    </div>
</template>
<script>
export default {
    name: "cardComponent",
    data() {
    },
    props: {
        img: {
            type: String,
            default:''
        },
        value: {
            type: String,
            default:''
        }
    }
}
</script>
<style lang="scss" src="./card.scss" scoped>
</style>