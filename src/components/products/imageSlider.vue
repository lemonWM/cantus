<template>
    <div class="grid-x grid-padding-x">
        <div class="cell small-2">
            <figure v-for="(img, index) in images" :key="img">
                <img :src="img" alt="" @click="selectImg(index)">
            </figure>
        </div>
        <div class="cell small-10">
            <figure >
                <img :src="images[selected]" alt="">
            </figure>
        </div>
    </div>
</template>

<script>
export default {
    name: 'images-slider',
    props: ['images'],
    data() {
        return {
            selected: 0
        }
    },
    methods: {
        
        selectImg(index){

            this.selected = index
        }
    },
}
</script>

<style scoped>

img{
    max-height: 800px;
}

</style>