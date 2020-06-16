<template>
    <div class="flex-container flex-dir-column categories-wrapper">
        <div class="header align-center-middle text-center">
            <h3>All instruments</h3>
        </div>
        <div class="grid-x grid-padding-x align-center-middle text-center">
            <div v-for="(product, index) in productSelected" :key="index" class="single-product">
                <router-link :to="{}" class="cell small-4 single-container">
                    <div class="main-product-content">
                        <img :src="product.photos[0]" alt="">
                        <p>{{product.product}}</p>
                        <p>{{product.producent}}</p>
                        <div class="product-hover">
                            <p>{{product.price}}</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'main-instrument-content',
    data() {
        return {
            
        }
    },
    computed: {
        
        productSelected(){

            return this.$store.state.productsSelected
        }
    },
    created() {
        
        this.axios.get('/products/instruments')
        .then(({ data })=> {

            this.setProductSelected(data)
        })
    },
    methods: {
        
        setProductSelected(data){

            this.$store.commit('setProductSelected', {
                products: data
            })
        }
    },
}
</script>