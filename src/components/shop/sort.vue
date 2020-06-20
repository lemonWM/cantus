<template>
    <div>
        <label for="sort">Sort by</label>
        <select name="" id="sort" v-model="sortBy" @change="update">
            <option value="">All products</option>
            <option  v-for="category in categories" :value="category.path">{{category.name}}</option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'sort',
    data() {
        return {
            sortBy:''
        }
    },
    computed: {
        
        categories(){
            
            if(this.$store.state.categories.length){

                return this.$store.state.categories
            } else {
                this.axios.get('/categories')
                .then(({ data }) =>{

                    this.setCategories(data)
                })
            }

            return this.$store.state.categories
        }
    },
    methods: {
        
        update(){

            this.$emit('select', this.sortBy)
        },
        setCategories(data){

            this.$store.commit('setCategories', {
                categories: data
            })
        }
    }
}
</script>