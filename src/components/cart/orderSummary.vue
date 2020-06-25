<template>
    <div>
        <div class="grid-container">
            <div class="grid-container cart-header">
                <h2>YOUR ORDER SUMMARY</h2>
                <div class="underline"></div>
            </div>
            <div class="grid-container cart-main">
                <div class="row">
                    <div class="columns medium-3">
                        
                    </div>
                </div>
                <div class="underline"></div>
                <div class="cart-summary grid-container ">
                    <div class="button-wrapper">
                        <button type="button" class="alert button">CANCEL</button>
                        <button type="button" class="success button">SEND</button>
                    </div>
                </div>
            </div>
        </div>
        <pre>{{order}}</pre>
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