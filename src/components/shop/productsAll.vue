<template>
    <div class="flex-container flex-dir-column">
        <div class="grid-x ">
            <search class="columns small-6"/>
            <sort class="columns small-6"  @select='selected'/>        
        </div>
        <div class="grid-x grid-padding-x align-center-middle products-wrapper">
            <div v-for="(product, index) in products" :key="product._id" class=" single-products">
                <single :product='product' />
            </div>
        </div>
    </div>
</template>

<script>

import single from '../page_instruments/mainSingle'
import search from '../shop/search'
import sort from '../shop/sort'
import {getProducts} from '../../mixins/mixins'

export default {
    name: 'products-list',
    mixins: [getProducts],
    data() {
        return {
            sortBy: ''
        }
    },
    computed: {
        
        products(){

            if( this.sortBy === ''){
                
                return this.$store.state.productsAll 
            } else {

                return this.$store.getters.getSelectedProducts(this.sortBy)
            }
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
        },
        selected(event){

            this.sortBy = event
        }
    },
    components: {
        sort,
        search,
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