<template>
    <section>
        <NavMain/>
        <img :src="tema.picture" alt="">

        <textarea name="" id="" cols="55" rows="10" placeholder="¿En que estas pensando?"></textarea>
        <div class="box-button">
            <button>Publica</button>
        </div>
    </section>
</template>
<script>
import NavMain from '../components/NavMain.vue'
import { temas } from '../temas';
export default{
    components:{
        NavMain
    },
    data(){
        return{
            nombreForo:this.$route.params.id,
            tema:temas.find(data => data.name == this.$route.params.id)
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
    img
        width: 400px
        border-radius: 10px

    textarea
        outline: none
        margin-top: 14px
        border-radius: 10px
        padding: 5px

.box-button
    width: 100%
    display: flex
    justify-content: end

    button
        margin-right: 11px
        margin-top: 10px
        padding: 5px
        width: 170px
        outline: none
        border: none
        border-radius: 10px
        background: darkcyan
        color: white

</style>