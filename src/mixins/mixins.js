import url from "postcss-url"

export const getProducts = {
    computed: {
        
        productSelected(){

            return this.$store.state.productsSelected
        }
    },
    created() {

        this.$store.state.productsSelected = []

        let urlData = window.location.hash

        let regex = new RegExp("#/","i") 

        let apiPoint = urlData.replace(regex, '')

        this.axios.get(`/Products/${apiPoint}`) 
        .then(({ data })=> {

            this.setProductSelected(data)
        })
    },
    methods: {
        
        setProductSelected(data){

            this.$store.commit('setProductSelected', {
                products: data
            })
        }
    },
}