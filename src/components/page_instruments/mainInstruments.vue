<template>
    <div class="flex-container flex-dir-column categories-wrapper">
        <div class="header align-center-middle text-center">
            <h3>All instruments</h3>
        </div>
        <div class="grid-x grid-padding-x align-center-middle text-center">
            <div v-for="(product, index) in productSelected" :key="index" class="single-product">
                <single :product='product'/>
            </div>
        </div>
    </div>
</template>

<script>

import single from '../page_instruments/mainSingle'

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
    components: {
        single
    }
}
</script>

