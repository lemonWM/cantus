<template>
    <div class="user-cart">
        <div class="grid-container" v-if="editMode">
            <div v-if="hasItem">
                <div class="grid-container cart-header title">
                    <h2>YOUR CART</h2>
                    <div class="underline"></div>
                </div>
                <div class="grid-container cart-main" v-for="(item, index) in cart">
                    <div class="row single-order-element">
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
                        <div class="columns medium-1">
                            <button class="hollow button" @click="removeElement(index)">Remove</button>
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
                <div class="grid-container cart-header">
                    <h2>No product in cart</h2>
                    <div class="underline"></div>
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
            editMode: true,
            hasItem: true
        }
    },
    computed: {
        
        cart(){

            if(this.$store.state.cart.length){

                return this.$store.state.cart
            } else {

                return this.hasItem = false
            }
        }
    },
    methods: {
        
        goShop(){

            this.$router.push({name: 'shop'})
        },
        changeMode(value){

            this.editMode = value
        },
        removeElement(index){

            this.$store.commit('removeElementOrder', {
                index: index
            })
        },
    },
    components: {
        orderDelivery
    }
}
</script>