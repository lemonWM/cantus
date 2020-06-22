<template>
    <router-link :to="{name: 'Product' , params: {id: url, product: product}}"  
                    class="cell small-4 single-container">
            <div class="main-product-content">
                <div class="main-content" @mouseover="changeOn" @mouseleave="changeOff" >
                    <img :src="picture" class="img-responsive">
                    <div class="product-hover" >
                        <p>{{product.price}}</p>
                    </div>
                </div>
                
                <p class="element">{{product.product}}</p>
                <p class="element">{{product.producent}}</p>

            </div>
    </router-link>
</template>

<script>

export default {
    name: 'main-product',
    props: ['product'],
    data() {
        return {
           picture: this.product.photos[0]
        }
    },
    computed: {
        
        url(){
            let reg = / /ig
            let url = this.product.product.replace(reg, '-')

            return this.product.producent +'/'+ url
        }
    },
    methods: {
        
        changeOn(){

            return this.picture = this.product.photos[2]
        },
        changeOff(){

            return this.picture = this.product.photos[0]
        }
    },
}
</script>

<style scoped>

img{
    width: 300px;
    height: 220px;
}

.element{
    font-size: 14px;
    color: #393939;
    margin: 0px;
}

.main-content{
    display: flex;
    position: relative;
    flex-direction: column;
    transition: all ease-in .2s;
}

.main-content:focus, .main-content:hover > .product-hover {
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background: #ffffff6b;
    color: black;
    font-size: 26px;
    font-weight: 500;
}

.main-product-content{
    display: flex;
    flex-direction: column;
    margin: 10px;
}

.product-hover{
    display: none;
}

</style>