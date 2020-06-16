<template>
    <div class="flex-container flex-dir-column categories-wrapper">
        <div class="categories-header">
            <h3>Our categories</h3>
        </div>
        <div class="grid-x grid-padding-x align-center-middle text-center">
            <div  v-for="(category, index) in categories" :key="index" class="single-category">
                <router-link :to="{name: category.path}" class="cell small-4 single-container">
                    <figure>
                       <img :src="category.url" alt="">             
                    </figure>
                    <div class="background">
                        <p>{{category.name}}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'home-categories',
    data() {
        return {
            
        }
    },
    computed: {
        categories(){

            return this.$store.state.categories
        }
    },
    created() {

        if(!this.categories.length){
            
            this.axios.get('/categories')
            .then(({ data }) =>{

                this.setCategories(data)
            })
        }
    },
    methods: {
        
        setCategories(data){

            this.$store.commit('setCategories', {
                categories: data
            })
        }
    }
}
</script>

<style scoped>

.categories-wrapper{
    margin: 100px 15%;
}

.single-category{
    margin: 10px;
}
.single-container{
    display: flex;
    position: relative;
    transition: all ease-in .1s;
}
.background{
    position: absolute;
    display: none;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #000000a3;
    color: white;
    font-size: 28px;
}
.single-container:focus, .single-container:hover >.background{
    display: flex;
}
</style>