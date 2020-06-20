<template>
    <div>
        <div>
            <input type="text" name="search" id="search" placeholder="search">
            <button type="button" class="success button">Search</button>
        </div>
        <div>
        <p>ddd</p>
            <select name="" id="" v-model="sortBy" @change="update">
                <option value="">All products</option>
                <option  v-for="category in categories" :value="category.path">{{category.name}}</option>
            </select>
        </div>
    </div>

</template>

<script>
export default {
    name: 'search',
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