<template>
    <div>
        <div v-if="!confirm">
            <div class="grid-container">
                <div class="grid-container cart-header">
                    <h2>YOUR ORDER SUMMARY</h2>
                    <div class="underline"></div>
                </div>
                <div class="grid-container cart-main" v-for="(order, index) in order.productOrder">
                    <div class="row">
                        <div class="columns medium-3">
                            <img :src="order.product.photos[0]" alt="">
                        </div>
                        <div class="columns medium-3">
                        <h3>{{order.product.producent}}</h3>
                        <h4>{{order.product.product}}</h4>
                        </div>
                        <div class="columns medium-3">
                            <p>x{{order.quantity}}</p>
                        </div>
                        <div class="columns medium-3">
                            <p>$ {{order.product.price * order.quantity}}</p>
                        </div>
                    </div>
                    <div class="underline"></div>
                </div>
            </div>
            <div class="grid-container">
                <div class="grid-container cart-header">
                    <h3>Shipping address</h3>
                    <div class="underline"></div>
                </div>
                <div class="grid-container cart-main">
                    <div class="row">
                        <div class="columns medium-3">
                            <p>{{order.user.firstName + ' ' + order.user.lastName}}</p>
                            <p>{{order.user.street}}</p>
                            <p>{{order.user.city + ' ' + order.user.zip}}</p>
                            <p>{{order.user.state}}</p>
                            <p>Phone: {{order.user.phone}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid-container">
                <div class="grid-container cart-header">
                    <h3>Shipping method</h3>
                    <div class="underline"></div>
                </div>
                <div class="grid-container cart-main">
                    <div class="row">
                        <div class="columns medium-3">
                            <p>{{order.deliveryTerms}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cart-summary grid-container ">
                <div class="button-wrapper">
                    <button type="button" class="alert button" @click="edit">CANCEL</button>
                    <button type="button" class="success button" @click="send">SEND</button>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="grid-container">
                <div class="row">
                    <div class="columns medium-12">
                        <h3>Congratulations!</h3>
                    </div>
                    <div class="columns medium-12">
                        <h4>We confirmed your order</h4>
                    </div>
                    <div class="columns medium-12">
                        <h5>Thank you for your purchase</h5>
                    </div>
                    <div class="columns medium-12">
                        <a href="">Visit your profile and look up for update status</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import * as moment from 'moment';
import 'moment/locale/pt-br';

export default {
    name: 'order-summary',
    data() {
        return {
            data: '',
            confirm: false,
            error: ''
        }
    },
    computed: {
        
        order(){

            return this.$store.state.order
        }
    },
    methods: {
        
        edit(){

            this.$router.go(-1)
        },
        getDate(){

            var moment = require('moment');

            this.data = moment().format()
        },
        send(){

            this.getDate()

            this.axios.post('/new-order', {
                user: this.order.userID,
                userAddress: this.order.user,
                order: this.order.productOrder,
                deliveryTerms: this.order.deliveryTerms,
                data: this.data
            })
            .then(({ data })=>{

                this.updateUser(data)

                // clear cart commit
            })
            .catch(({ error })=> {

                this.error = error
            })
        },
        updateUser(data){

            this.axios.put('/user-update', {
                userID: this.order.userID,
                orderID: data,
                order: this.order
            })
            .then(({ data })=>{
                
                this.confirm = true
            })
            .catch(({ error }) =>{

                this.error = error
            })
        }
    },
}
</script>