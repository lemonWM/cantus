import vue from 'vue';

export default{
    
    setCategories(state, payload){

        state.categories = payload.categories
    },
    setProductSelected(state, payload){

        state.productsSelected = payload.products
    },
    setProducts(state, payload){

        state.productsAll = payload.products
    },

    // when login ->
    setUser(state, payload){

        state.user = payload.user
    }
}