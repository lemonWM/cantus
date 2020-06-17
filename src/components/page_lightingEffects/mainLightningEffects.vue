<template>
    <div class="flex-container flex-dir-column categories-wrapper">
        <div class="header align-center-middle text-center">
            <h3>Lightning & effects</h3>
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
import {getProducts} from '../../mixins/mixins'

export default {
    name: 'main-lightning-content',
    mixins:[getProducts],
    data() {
        return {
            
        }
    },

    components: {
        single
    }
}
</script>