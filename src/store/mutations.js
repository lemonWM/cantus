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
    },

    setUserDetails(state, payload){


        state.userDetails = payload.userDetails
    },
    
    // add to cart - buy ->
    setCart(state, payload){

        state.cart.push(payload)
    },

    //remove from order single element
    removeElementOrder(state, payload){

        state.cart.splice(payload.index, 1)
    },

    //order set user & product
    setOrder(state, payload){

        state.order = payload
    }
}