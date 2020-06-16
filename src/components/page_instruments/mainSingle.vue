<template>
    <router-link :to="{name: 'product' , params: {id: url, product: product}}"  
                    class="cell small-4 single-container">
            <div class="main-product-content">
                <img :src="product.photos[0]" alt="">
                <p>{{product.product}}</p>
                <p>{{product.producent}}</p>
                <div class="product-hover">
                <p>{{product.price}}</p>
            </div>
        </div>
    </router-link>
</template>

<script>

export default {
    name: 'main-product',
    props: ['product'],

    computed: {
        
        url(){
            let reg = / /ig
            let url = this.product.product.replace(reg, '-')

            return this.product.producent +'/'+ url
        }

    },
}
</script>

<style scoped>

img{
    width: 300px;
}
</style>