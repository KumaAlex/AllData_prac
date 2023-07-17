<template lang="">
    <div class="header">
        <topOrganism />
        <infoOrganism />
        <img class="header__background" src="@/assets/background/header-background.png" alt="">
    </div>
</template>
<script>
import topOrganism from '@/components/organism/top/top.vue';
import infoOrganism from '@/components/organism/info/info.vue';
export default {
    name: "headerTemplate",
    components: {
        topOrganism,
        infoOrganism,
    }
}
</script>
<style lang="scss" scoped src="./header.scss">
</style>