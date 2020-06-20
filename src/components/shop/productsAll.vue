<template>
    <div class="grid-x grid-padding-x align-middle align-center-middle products-wrapper">
        <div v-for="(product, index) in products" :key="product._id" class="single-product cell small-3">
            <single :product='product'/>
        </div>
    </div>
</template>

<script>

import single from '../page_instruments/mainSingle'
import {getProducts} from '../../mixins/mixins'

export default {
    name: 'products-list',
    mixins: [getProducts],
    data() {
        return {
            
        }
    },
    computed: {
        
        products(){

            return this.$store.state.productsAll
        }
    },
    created() {
        
        if(!this.products.length){

            this.axios.get('/products')
                .then(({ data })=>{

                    this.setProducts(data)
                })
        }
    },
    methods: {
        
        setProducts(data){

            this.$store.commit('setProducts', {
                products: data
            })
        }
    },
    components: {
        single
    }
}
</script>

<style scoped>

.products-wrapper{
    flex-wrap: wrap;
}

.single-product{
    width: 300px;
}

</style>