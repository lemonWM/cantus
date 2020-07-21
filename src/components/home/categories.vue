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