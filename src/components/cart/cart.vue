<template>
    <div class="grid-container">
        <div class="grid-container cart-header">
            <h2>YOUR CART</h2>
            <div class="underline"></div>
        </div>
        <div class="grid-container cart-main">
            <div class="row">
                <div class="columns medium-3">
                    <img :src="product.photos[0]" alt="">
                </div>
                <div class="columns medium-4">
                    <p>{{product.product}}</p>
                    <p>{{product.producent}}</p>
                </div>
                <div class="columns medium-3">
                    <label for="quantity">
                        Quantity
                        <input type="number" id="quantity" min="1" :max="product.stock" placeholder="1" v-model="items">
                    </label>
                    <p>Stock: {{product.stock}}</p>
                </div>
                <div class="columns medium-2">
                    <p>$ <span>{{product.price}}</span></p>
                </div>
            </div>
            <div class="underline"></div>
            <div class="cart-buttons grid-container ">
                <div class="summary">
                    <p>Total cost: $ <span>{{product.price*items}}</span></p>
                </div>
                <button type="button" class="alert button">CANCEL</button>
                <button type="button" class="success button">PURCHASE</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'cart',
    props: ['product'],
    data() {
        return {
            items: 1
        }
    },
   watch: {
       items(n){

           console.log(n)
       }
   },
}
</script>