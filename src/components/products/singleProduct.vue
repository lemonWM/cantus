<template>
    <div class="single-product"> 
        <div class="flex-container flex-dir-column wrapper product-wrapper-main">
            <div class="grid-x grid-padding-x single">
                <div class="cell small-7">
                    <imageSlider  :images='this.productSingle.photos'/>
                </div>
                <div class="cell small-5">
                    <productDescribtion  :product='this.productSingle'/>
                </div>
            </div>
            <div class="grid-x grid-padding-x align-center-middle text-center details">
                <div class="features">
                    <div class="nav">
                        <div class="details-btn">
                            <router-link :to="{name: 'details',  params: {details: productSingle.details}}" >DETAILS</router-link>
                        </div>
                        <div class="features-btn">
                            <router-link :to="{name: 'features',  params: {features: productSingle.features, productName: productSingle.product}}" >FEATURES </router-link>
                        </div>
                    </div>
                    <router-view ></router-view>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>

import imageSlider from './imageSlider'
import productDescribtion from './productDescription'


export default {
    name: 'product',
    props: ['id', 'product'],
    data() {
        return {
            productSingle :{}
        }
    },
    created() {
        
       this.productSingle = this.product
    },
    components: {
        imageSlider,
        productDescribtion,
    }
}
</script>