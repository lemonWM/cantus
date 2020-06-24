<template>
    <div class="grid-container">
        <div class="grid-container cart-header">
            <h2>ORDER CHECKOUT</h2>
            <div class="underline"></div>
        </div>
        <div class="grid-container" v-for="item in getCart">
            <div class="grid-container cart-main">
                <div class="row">
                    <div class="columns medium-3">
                        <img :src="item.product.photos[0]" alt="">
                    </div>
                    <div class="columns medium-4">
                        <p>{{item.product.product}}</p>
                        <p>{{item.product.producent}}</p>
                    </div>
                    <div class="columns medium-3">
                        <p>Quantity</p>
                        <p>{{item.quantity}}</p>
                    </div>
                    <div class="columns medium-2">
                        <p>Cost</p>
                        <p>{{item.product.price*item.quantity}}</p>
                    </div>
                </div>
                <div class="underline"></div>
            </div>
        </div> 
        <div class="cart-summary grid-container ">
            <div class="summary">
                <p>Total cost: $ <span>{{total}}</span></p>
            </div>
            <div class="button-wrapper">
                <button type="button" class="hollow button" @click="goShop">KEEP SHOPING</button>
                <button type="button" class="success button" >PURCHASE</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'order',
    data() {
        return {
           totalPrice: 0
        }
    },
    computed: {
        
        getCart(){

            return this.$store.state.cart
        },
        total(){

            let value = 0

            for(let i = 0; i < this.getCart.length; i++){

                value += (this.getCart[i].product.price * this.getCart[i].quantity)
            }
            return value
        }
    },
    methods: {
        
        goShop(){

            this.$router.push({name: 'shop'})
        }
    },
}
</script>