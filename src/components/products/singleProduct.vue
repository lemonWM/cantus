<template>
    <div>
        <div class="grid-x grid-padding-x">
            <div class="cell small-7">
                <imageSlider  :images='product.photos'/>
            </div>
            <div class="cell small-5">
                <productDescribtion  :product='product'/>
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
            
        }
    },
    components: {
        imageSlider,
        productDescribtion
    }
}
</script>