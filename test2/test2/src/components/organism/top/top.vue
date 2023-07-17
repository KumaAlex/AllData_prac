<template lang="">
    <div class='top'>
        <logoAtom class="top__logo" />
        <buttonAtom class="top__btn" />  
    </div>
</template>
<script>
import logoAtom from '@/components/atoms/logo/logo.vue';
import buttonAtom from '@/components/atoms/button/button.vue';
export default {
    name: 'top-organism',
    components: {
        logoAtom,
        buttonAtom,
    },
}
</script>
<style lang="scss" scoped src="./top.scss">
</style>