<template>
    <section>
            <router-link to="/">
                <i class="fa-brands fa-rocketchat"></i> 
            </router-link>
            <router-view></router-view>
            <div class="data">
                <input type="text" placeholder="Nombre" v-model="nombre">
                <input type="text" placeholder="Apellido" v-model="apellido">
                <input type="text" placeholder="usuario" v-model="username">
                <input type="password" placeholder="Contraseña" v-model="password">
                <input type="text" placeholder="Foto de perfil" v-model="picture">
                <input type="text" placeholder="Descripción" v-model="description">
            </div>
            <div class="button-space">
                    <button @click="main">Crear cuenta</button>
            </div>
    </section>
</template>
<script>
import Swal from 'sweetalert2'
import { user } from '@/users';
import { registered } from '../usersRegistered'
export default{
    data(){
        return{
            nombre:'',
            apellido:'',
            username:'',
            password:'',
            picture:'',
            description:''
        }
    },
    methods:{
        main(){
            if(this.nombre.length == 0 ||this.apellido.length == 0 ||this.username.length == 0 ||this.password.length == 0 ||this.picture.length == 0 ||this.description.length == 0 ){
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
                this.password = ''
                this.username = ''
            }else{
                user.push({
                    name:this.username,
                    password:this.password,
                    nameLong:this.nombre,
                    lastName:this.apellido,
                    descripcion:this.description,
                    picture:this.picture
                })
                registered.push({
                    name:this.username,
                    password:this.password,
                    nameLong:this.nombre,
                    lastName:this.apellido,
                    descripcion:this.description,
                    picture:this.picture
                })
                this.$router.push({name:'main'})
            }
        }
    }
}
</script>
<style lang="sass" scoped>
section
    width: 100%
    height: 100vh
    background: #35119D
    display: flex
    align-items: center
    flex-direction: column  
    justify-content: space-around

    i
            font-size: 65px
            color: black
            font-weight: bold
            margin-bottom: 40px
            margin-top: 30px

.data
    height: 350px
    display: flex
    justify-content: space-around
    align-items: center
    flex-direction: column
    input
            color: white
            width: 250px
            height: 120px
            text-align: center
            border: none
            background: #35119D
            font-size: 15px
            font-weight: bold
            border-bottom: 2px solid white
            outline: none
            &::placeholder
                    color: white

.button-space
    height: 200px
    width: 180px
    display: flex
    flex-direction: column
    justify-content: space-around
    button
            width: 100%
            text-align: center
            padding: 18px
            border-radius: 10px
            color: white
            font-weight: bold
            background: red
            text-decoration: none
            border: none
            box-shadow: 0px 2px 2px 0px black

</style>