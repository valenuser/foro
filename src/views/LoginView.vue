<template>
        <section>
                <i class="fa-brands fa-rocketchat"></i> 
                <div class="title">
                        <h1>HOLA</h1>
                        <p>"Esto es 4tuforo"</p>
                </div>
                <div class="data">
                        <div class="username">
                                <i class="fa-solid fa-user"></i>
                                <input type="text" placeholder="@usuario">
                        </div>
                        <div class="password">
                                <i class="fa-solid fa-lock"></i>
                                <input type="text" placeholder="Contraseña">
                        </div>
                </div>
                <div class="button-space">
                        <button @click="login">Iniciar sesión</button>
                        <router-link to="/register">Crear cuenta</router-link>
                        <router-view></router-view>
                </div>
        </section>
</template>
<script>
export default{
        name:'LoginView',
        methods:{
                login(){
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

.title
        text-align: center

        h1
                font-size: 30px
                color: white

        p
                color: gray

.data
        height: 200px
        display: flex
        justify-content: space-around
        flex-direction: column
.username, .password
        overflow: hidden
        i
                position: absolute
                font-size: 20px
                color: white
                left: 100px

        input
                color: white
                width: 250px
                height: 30px
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
        display: flex
        flex-direction: column
        justify-content: space-around
        a
                width: 160px
                text-align: center
                padding: 15px
                border-radius: 10px
                color: white
                font-weight: bold
                background: red
                text-decoration: none
                box-shadow: 0px 2px 2px 0px black

        button
                width: 100%
                text-align: center
                padding: 15px
                border-radius: 10px
                color: white
                font-weight: bold
                background: green
                text-decoration: none
                border: none
                box-shadow: 0px 2px 2px 0px black

</style>