import vue from 'vue';

export default {

    getSelectedProducts: (state) => (id) => {

        return state.productsAll.filter(function(product){

            return product.category == id
        })
    }

}