<template>
     <div class="grid-container">
        <h2>YOUR ACCOUNT</h2>
        <div class="underline"></div>

        <div class="row">
            <router-link :to="{name: 'profile', params:{user: userDetails}}">Profile</router-link>
            <router-link :to="{name: 'orderHistory', params:{order: userDetails.orders}}">Order history</router-link>
        </div>
        <router-view></router-view>
     </div>
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