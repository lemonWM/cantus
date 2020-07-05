<template>
    <div>
        <div class="grid-container" v-if="editMode">
            <div class="grid-container cart-header">
                <h2>YOUR CART</h2>
                <div class="underline"></div>
            </div>
            <div class="grid-container cart-main" v-for="(item, index) in cart">
                <div class="row">
                    <div class="columns medium-3">
                        <img :src="item.product.photos[0]" alt="">
                    </div>
                    <div class="columns medium-4">
                        <p>{{item.product.product}}</p>
                        <p>{{item.product.producent}}</p>
                    </div>
                    <div class="columns medium-2">
                        <p>$ <span>{{item.product.price*item.quantity}}</span></p>
                    </div>
                </div>
                <div class="underline"></div>
            </div>
            <div class="cart-summary grid-container ">
                <div class="button-wrapper">
                    <button type="button" class="hollow button" @click="goShop">KEEP SHOPING</button>
                    <button type="button" class="success button" @click="editMode =! editMode" :disabled='!cart.length'>PURCHASE</button>
                </div>
            </div>
        </div>
        <div v-else>
            <orderDelivery @changeMode='changeMode'/>
        </div>
    </div>

</template>

<script>

import orderDelivery from '../cart/orderDelivery'

export default {
    name: 'user-cart',
    data() {
        return {
            editMode: true
        }
    },
    computed: {
        
        cart(){

            return this.$store.state.cart
        }
    },
    methods: {
        
        goShop(){

            this.$router.push({name: 'shop'})
        },
        changeMode(value){

            this.editMode = value
        }
    },
    components: {
        orderDelivery
    }
}
</script>