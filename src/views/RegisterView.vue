<template>
    <section>
            <router-link to="/">
                <i class="fa-brands fa-rocketchat"></i> 
            </router-link>
            <router-view></router-view>
            <div class="data">
                <input type="text" placeholder="Nombre">
                <input type="text" placeholder="Apellido">
                <input type="text" placeholder="usuario">
                <input type="password" placeholder="Contraseña">
                <input type="text" placeholder="Foto de perfil">
                <input type="text" placeholder="Descripción">
            </div>
            <div class="button-space">
                    <button @click="main">Crear cuenta</button>
            </div>
    </section>
</template>
<script>
export default{
    methods:{
        main(){
            this.$router.push({name:'main'})
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
            background: blue
            font-size: 15px
            border-bottom: 1px solid white
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