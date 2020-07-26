<template>
    <div class="flex-container flex-dir-column">
        <h3 class="product-name">{{product.product}}</h3>
        <h4 class="product-producent">{{product.producent}}</h4>
        <p>Price: <span>{{product.price}} $</span></p>
        <p>On stock: <span>{{product.stock}}</span></p>
        <div class="flex-container flex-dir-column is-logged">
            <p v-if="!isLogged">Login to buy</p>
            <button type="button" class="success button" @click="addToCart" :disabled='!isLogged'>Buy</button>      
        </div>
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
    computed: {
        
        isLogged(){

            return this.$store.state.user.firstName
        }
    },
    methods: {
        addToCart(){

            this.$router.push({name: 'Cart', params: {product: this.single}})
        },
    }
}
</script>