import vue from 'vue';

export default{
    
    setCategories(state, payload){

        state.categories = payload.categories
    },
    setProductSelected(state, payload){

        state.productsSelected = payload.products
    }
}