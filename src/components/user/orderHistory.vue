<template>
    <div>
        <div class="grid-container" v-for="(single, index) in order" :key="index">
            <div class="row">
                <div class="columns medium-3">
                   <img :src="single.order.productOrder[0].product.photos[0]" alt="">
                </div>
                <div class="columns medium-3">
                    <p>{{single.order.productOrder[0].product.producent}}</p>
                    <p>{{single.order.productOrder[0].product.product}}</p>
                </div>
                <div class="columns medium-3">
                    <p>Category: <span>{{single.order.productOrder[0].product.category}}</span></p>
                </div>
                <div class="columns medium-3">
                    <p>Quantity:  <span>{{single.order.productOrder[0].quantity}}</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'order-history',
    props: ['order'],

}
</script>