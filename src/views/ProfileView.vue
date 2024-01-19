<template>
    <section>
        <NavMain/>
        <div v-for="data in user" :key="data.name">
            <div class="container">
                <div class="containerImg">
                    <img :src="data.picture" alt="">
                </div>
                <h1>{{ data.name }}</h1>
                <p>{{ data.descripcion}}</p>
            </div>
        </div>
    </section>
</template>
<script>
import NavMain from '../components/NavMain.vue'
import { user } from '@/user';
export default{
    components:{
        NavMain
    },
    data(){
        return{
            user:user
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

.container
    width: 100%
    height: 60vh
    display: flex
    flex-direction: column
    justify-content: space-around
    align-items: center
    text-align: center
    p
        font-size: 10px
        padding: 5px
        color: white

    h1
        color: white
.containerImg
    width: 200px
    height: 200px
    overflow: hidden
    border-radius: 50%
    display: flex
    align-items: center
    justify-content: center 
    img
        width: 200px
        transform: translateY(20px)
</style>