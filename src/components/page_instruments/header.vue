<template>
    <div class="flex-container flex-dir-column home-header">
        <img src='../../../public/img/header2.jpg' alt="" class="img-responsive">
        <div class="flex-container align-center-middle flex-dir-column title-header">
            <h2 class="title-logo">LET'S ROCK</h2>
            <h3 class="special-font">with Cantus</h3>
        </div>
        <div class="shadow"></div>
    </div> 
</template>

<script>
export default {
    name: 'instrument-page-header'
}
</script>

<style scoped>

img{
    min-height: 180px;
}
h2{
    margin-right: 0px !important;
}
.home-header{
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
}
.special-font{
    font-family: 'Great Vibes', cursive;
}
</style>
