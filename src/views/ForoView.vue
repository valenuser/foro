<template>
    <section>
        <NavMain/>
        <img :src="tema.picture" alt="">

        <textarea name="" id="" cols="55" rows="10" placeholder="¿En que estas pensando?" v-model="description"></textarea>
        <div class="box-button">
            <button @click="post">Publica</button>
        </div>
        <div v-if="comentariosA.length != 0">            
            <PublicacionCard v-for="comentario in comentariosA" :key="comentario.name" :imgUser="comentario.picture" :tema="comentario.tema" :description="comentario.description"/>
        </div>
        <div v-else>
            <div class="noPost">
                <p>No hay comentarios publicados.</p>
            </div>
        </div>
    </section>
</template>
<script>
import NavMain from '../components/NavMain.vue'
import PublicacionCard from '@/components/PublicacionCard.vue';
import { comentarios } from '../comentarios'
import { temas } from '../temas';
import { user } from '@/users'
import Swal from 'sweetalert2'
export default{
    components:{
        NavMain,
        PublicacionCard
    },
    data(){
        return{
            nombreForo:this.$route.params.id,
            tema:temas.find(data => data.name == this.$route.params.id),
            comentariosA:[],
            description:''
        }
    },
    mounted(){
        if(comentarios.filter(data => data.tema == this.$route.params.id).length != 0){
            this.comentariosA = comentarios.filter(data => data.tema == this.$route.params.id)
        }
    },
    methods:{
        post(){
            if(this.description.length == 0){
                Swal.fire({
                    title: "Rellene correctamente el formulario.",
                    icon:'error',
                    showClass: {
                    popup: `
                            animate__animated
                            animate__fadeInUp
                            animate__faster
                    `
                    },
                    hideClass: {
                    popup: `
                            animate__animated
                            animate__fadeOutDown
                            animate__faster
                    `
                    }
                });

                this.description  =''
            }else{
                comentarios.push({
                    tema:this.nombreForo,
                    description:this.description,
                    picture:user[0].picture
                })
                this.comentariosA.push({
                    tema:this.nombreForo,
                    description:this.description,
                    picture:user[0].picture
                })

                this.description  =''
            }
        }
    }
}
</script>
<style lang="sass" scoped>
section
    width: 100%
    background: #35119D
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

    hr
        width: 100%

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
        margin-bottom: 10px

.noPost
    height: 189px
    width: 100%
    display: flex
    align-items: center
    justify-content: center
    p
        color: white
</style>