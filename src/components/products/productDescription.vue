<template>
    <div class="flex-container flex-dir-column">
        <h3 class="product-name">{{product.product}}</h3>
        <h4 class="product-producent">{{product.producent}}</h4>
        <p>Price: <span>{{product.price}} $</span></p>
        <p>On stock: <span>{{product.stack}}</span></p>
        <button type="button" class="success button" @click="addToCart">Buy</button>
    </div>
</template>

<script>
export default {
    name: 'product-description',
    props: ['product'],
    data() {
        return {
            single: this.product
        }
    },
    methods: {
        addToCart(){

            this.$router.push({name: 'Cart', params: {product: this.single}})
        },

    }
}
</script>