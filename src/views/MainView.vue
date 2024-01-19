<template>
    <section>
        <NavMain/>
        <div class="temas-container">
            <div v-for="tema in temas" :key="tema.name">
                <div class="container">
                    <img :src="tema.picture" alt="" @click="foro(tema.name)">
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import NavMain from '../components/NavMain.vue'
import { temas } from '@/temas';
export default{
    components:{
        NavMain
    },
    data(){
        return{
            temas:temas
        }
    },
    methods:{
        foro(name){
            this.$router.push({name:'foro',params:{id:name}})
        }
    }
}
</script>
<style lang="sass" scoped>
section
    width: 100%
    height: 100vh
    background: blue
    display: flex
    align-items: center
    flex-direction: column  


.temas-container
    height: 80vh
    display: flex
    flex-direction: column
    justify-content: space-around
.container
    overflow: hidden
    width: 350px
    height: 200px
    border-radius: 10px
    img
        width: 100%
        height: 210px
</style>