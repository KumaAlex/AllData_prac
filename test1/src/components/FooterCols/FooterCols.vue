<template>
    <div class="FooterCols">
        <div class="FooterCols__list" v-for="item in cols" :key="item.id">
            <div v-if="item.imgs" class="FooterCols__list__item">
                <div v-for="img in item.imgs" :key="img.id" class="FooterCols__list__item__imgs">
                    <div class="FooterCols__list__item__imgs-img" :style="{
                        backgroundImage: img.hover ? `url(${require(`@/assets${img.hoverImgURL}`)})` : `url(${require(`@/assets${img.imgURL}`)})`,
                        }" @mouseover="img.hover = true" @mouseleave="img.hover = false" />
                </div>
            </div>
            <div v-else class="FooterCols__list__item">
                <router-link v-if="item.type" to="/" class="FooterCols__list__item__router" :style="{
                    fontWeight: `${item.type}`
                }"> {{ item.text }}
                </router-link>
                <div v-else to="/" class="FooterCols__list__item__router"> {{ item.text }} </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: "FooterCols",
        data() {
            return {
                cols: this.col,
            }
        },
        props: {
            col: {
                type: Array,
            }
        },
        methods: {
            addHover() {
                this.cols.forEach(element => {
                    if (element.imgs) {
                        element.imgs.forEach(e => {
                            e["hover"] = false;
                        })
                    }
                });
            },
        },
        mounted() {
            this.addHover();
        }
    }
</script>


<style lang="scss" src="./FooterCols.scss">

</style>



<!-- ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ -->