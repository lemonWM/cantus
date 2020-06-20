<template>
    <div class="flex-container flex-dir-column shop-header">
        <img src='../../../public/img/header2.jpg' alt="" class="img-responsive">
        <div class="flex-container flex-dir-row title-header">
            <h2 class="title-logo">Cantus <span>shop with quality stuff</span></h2>
        </div>
        <div class="shadow"></div>
    </div> 
</template>

<script>
export default {
    name: 'shop-header'
}
</script>

<style scoped>

img{
    min-height: 180px;
}

.shop-header{
    position: relative;
    justify-content: center;
    align-items: center;
}
.title-header{
    position: absolute;
}
.shadow{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: #000000ad;
}
.title-header{
    color: white;
    z-index: 3;
    margin: 0px 20%;
}
.title-logo{
    margin-right: 10px;
}
.title-logo{
    text-align: center;
    font-family: 'Great Vibes', cursive;
}
span{
    font-family: "Helvetica Neue",Helvetica,Roboto,Arial,sans-serif;
    font-size: 28px;
}
</style>
