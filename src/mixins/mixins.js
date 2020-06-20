export const getProducts = {
    computed: {
        
        productSelected(){

            return this.$store.state.productsSelected
        }
    },
    created() {

        this.$store.state.productsSelected = []

        this.axios.get(`/Products${window.location.pathname}`) 
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