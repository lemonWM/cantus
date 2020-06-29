<template>
    <div>{{userDetails}}</div>
</template>

<script>
export default {
    name: 'user',
    props: ['user'],
    data() {
        return {
            error: ''
        }
    },
    created() {

        let id = this.user._id
        
        this.axios.get(`/user/${id}`)
        .then(({ data })=> {
            
            this.setUserDetails(data)
        })
        .catch(({ error })=>{
            
            this.error = error
        })
    },

    computed: {
        
        userDetails(){

            return this.$store.state.userDetails
        }
    },

    methods: {
        
        setUserDetails(data){

            this.$store.commit('setUserDetails', {
                userDetails: data
            })
        }
    },
}
</script>