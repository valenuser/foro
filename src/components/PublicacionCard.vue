<template>
    <div class="container">
        <div class="user">
            <div class="cont-img">
                <img :src="imgUser" alt="">
            </div>
        </div>
        <div class="dataContainer">
            <h1>{{tema}}</h1>
            <div class="dataDescription">
                <p>{{ description }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    props:{
        imgUser:String,
        tema:String,
        description:String
    }
}
</script>
<style lang="sass" scoped>
.container
    margin-top: 20px
    width: 400px
    height: 167.5px
    border-bottom: 1px solid gray 
    display: flex
    overflow: hidden

.user
    overflow: hidden
    width: 30%
    height: 90%
    display: flex
    align-items: center
    justify-content: center    
    border-right: 1px solid gray
    margin-bottom: 5px

.cont-img
    width: 60px
    height: 60px
    border-radius: 50%
    display: flex
    overflow: hidden

    img
        width: 100%
        // height: 60px
        object-fit: cover
        transform: translateY(1px)

.dataContainer
    width: 70%
    height: 90vh
    padding: 5px
    display: flex
    flex-direction: column
    overflow-y: scroll

    h1
        color: white
        margin-bottom: 4px



.dataDescription
    width: 100%
    height: 100vh
    p
        color: lightgray   

</style>