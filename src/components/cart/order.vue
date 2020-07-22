<template>
    <div>
        <div class="grid-container order-wrapper" v-if="editMode">
            <div class="grid-container cart-header">
                <h2>ORDER CHECKOUT</h2>
                <div class="underline"></div>
            </div>
            <div class="grid-container" v-for="(item, index) in getCart" :key="index">
                <div class="grid-container cart-main">
                    <div class="row single-order-element">
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
                        <div class="columns medium-1">
                            <p>Cost</p>
                            <p>{{item.product.price*item.quantity}}</p>
                        </div>
                        <div class="columns medium-1">
                            <button class="hollow button" @click="removeElement(index)">Remove</button>
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
                    <button type="button" class="success button" @click="editMode =! editMode" :disabled='!getCart.length'>PURCHASE</button>
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
    name: 'order',
    data() {
        return {
           totalPrice: 0,
           editMode: true
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
        },
        removeElement(index){

            this.$store.commit('removeElementOrder', {
                index: index
            })
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