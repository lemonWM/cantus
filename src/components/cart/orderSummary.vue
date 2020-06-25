<template>
    <div>
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
                <button type="button" class="alert button">CANCEL</button>
                <button type="button" class="success button">SEND</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'order-summary',
    data() {
        return {
            
        }
    },
    computed: {
        
        order(){

            return this.$store.state.order
        }
    },
}
</script>