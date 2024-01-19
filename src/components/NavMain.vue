<template>
    <nav>
        <div v-if="url == 'http://localhost:8080/main'">
            <router-link to="/profile"><i class="fa-brands fa-rocketchat"></i> </router-link>
        </div>
        <div v-else-if="url == 'http://localhost:8080/profile'">
            <router-link to="/main"><i class="fa-solid fa-arrow-left"></i> </router-link>
        </div>
        <div v-else-if="url.includes('http://localhost:8080/foro/')">
            <router-link to="/main"><i class="fa-brands fa-rocketchat"></i> </router-link>
        </div>
        <router-link to="/"><i class="fa-solid fa-right-from-bracket"></i></router-link>
    </nav>
    <router-view></router-view>
</template>
<script>

export default{
    name:'NavMain',
    data(){
        return{
            url: window.location.href
        }
    }
}
</script>
<style lang="sass" scoped>
nav
    width: 90%
    height: 90px
    display: flex
    justify-content: space-between
    align-items: center
    i
        font-size: 40px
        color: white
</style>
