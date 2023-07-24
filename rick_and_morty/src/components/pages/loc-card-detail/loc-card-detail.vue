<template lang="">
    <div class='loc-detail'>
        <h1>PODROBNIE DETALI EPISODA</h1>

        <locCard v-if="locData.results" class="loc-detail__info__card" :data='locData.results' />

        <div class="loc-detail__info__characters">

            {{ showedCharacters }} / {{ maxCharacters }}

            <button v-show="maxCharacters > showedCharacters" v-on:click="increaseShowedCharacters()">show
                more</button>


                {{charList
                }}
            <div class="loc-detail__info__characters-list">
                <div v-for="(item, index) in charList" :key="index">
                    <router-link class="loc-detail__info__characters-list__router"
                        :to="{path: `/character/${item[0]}`}">{{item[0]}}: "{{ item[1] }}"</router-link>
                </div>
            </div>

        </div>
    </div>
</template>
<script lang="ts">
    import locCard from '@/components/subComponents/loc-card/loc-card.vue'
    import characterModel from '@/components/models/characterModel/characterModel'
    import locationModel from '@/components/models/locationModel//locationModel'
    import {
        defineComponent,
        onMounted,
        watch,
        ref,
        reactive
    } from 'vue'
    import { useRoute } from 'vue-router'

    export default defineComponent({
        name: 'loc-card-detail',
        components: {
            locCard,
        },
        setup() {
            // data =====================================================================
            const locData = reactive(new locationModel());
            let showedCharacters = ref(0);
            let charList = reactive<[number, string][]>([]);
            let maxCharacters = ref(0);
            let residents: string[] | undefined = reactive([]);
            const routeId = useRoute().params.id;
            // functions =====================================================================
            async function getData() {
                locData.setResults(await locData.getData(`/${routeId}`));
                residents = locData.getResults()?.residents;
                maxCharacters.value = residents?.length || 0;
                increaseShowedCharacters();
            }
            async function getCharacterName(url: string) {
                const char = new characterModel();
                let res: [number, string] | undefined = await char.getNameByUrl(url);
                if (res) {
                    charList.push(res);
                    console.log(charList);
                }
            }
            function increaseShowedCharacters() {
                if ((showedCharacters.value) + 5 >= maxCharacters.value) {
                    showedCharacters.value = maxCharacters.value;
                } else {
                    showedCharacters.value += 5;
                }
            }
            // onMounted hook =====================================================================
            onMounted(() => {
                getData();
            });
            watch(showedCharacters, (newV, oldV) => {
                residents?.slice(oldV, newV).forEach(
                    (url) => {
                        getCharacterName(url);
                    }
                );
            })

            return {
                locData,
                showedCharacters,
                maxCharacters,
                routeId,
                charList,
                increaseShowedCharacters,
            }
        },
    })
</script>
<style lang="scss" scoped src="./loc-card-detail.scss">

</style>