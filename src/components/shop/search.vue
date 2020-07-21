<template>
    <div class="sort-element">
        <label for="search" class="search-element">
            Search product
        </label>
        <input id="search" type="text" v-model="value" placeholder="ex. Gibson, Fender">
    </div>
</template>

<script>
export default {
    name: 'search',
    data() {
        return {
            value: ''
        }
    },
    methods: {

        setProducts(data){

            this.$store.commit('setProducts', {
                products: data
            })
        },
    },
    watch: {
        
        value(value){

            this.axios.get('find_product', {
                params: {
                    name: this.value
                }
            })
            .then(({ data })=> {
                
                this.setProducts(data)
            })
        }
    },
}
</script>

<style scoped>

.search-element{
    display: flex;
    flex-direction: row;
}
button{
    height: 39px;
}

</style>