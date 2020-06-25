<template>
    <div>  
        <div>
            <h2>Where would you like this order delivered?</h2>
        </div> 
        <form>
            <div class="grid-container">
                <div class="grid-x grid-padding-x">
                    <div class="medium-6 cell">
                        <input type="text" placeholder="FIRST NAME" v-model="userOrder.firstName">
                    </div>
                    <div class="medium-6 cell">
                        <input type="text" placeholder="LAST NAME" v-model="userOrder.lastName">
                    </div>
                     <div class="medium-12 cell">
                        <input type="text" placeholder="STREET ADDRESS" v-model="userOrder.street">
                    </div>
                    <div class="medium-4 cell">
                        <input type="text" placeholder="ZIP" v-model="userOrder.zip">
                    </div>
                    <div class="medium-4 cell">
                        <input type="text" placeholder="CITY" v-model="userOrder.city">
                    </div>
                    <div class="medium-4 cell">
                        <input type="text" placeholder="STATE" v-model="userOrder.state">
                    </div>
                    <div class="medium-6 cell">
                        <input type="text" placeholder="DELIVERY PHONE" v-model="userOrder.phone">
                    </div>
                    <div class="medium-6 cell">
                        <input type="text" placeholder="EMAIL ADDRESS" v-model="userOrder.email">
                    </div>
                </div>
            </div>
        </form>
        <div>
            <div>
                <h3>Select a shipping speed</h3>
            </div>
            <div>
                <form>
                    <label for="standard">
                        <input type="radio" value="standard" id="standard" v-model="shippingSpeed">
                        Standard - within 5 Business Days (after shipping): $0.00
                    </label>
                     <label for="business">
                        <input type="radio" value="business" id="business" v-model="shippingSpeed">
                        Business - within 5 Business Days (after shipping): $50.00
                    </label>
                     <label for="premium">
                        <input type="radio" value="premium" id="premium" v-model="shippingSpeed">
                        Premium - next Business Day (after shipping): $70.00
                    </label>
                </form>
            </div>
        </div>
        <div>
            <button type="button" class="hollow button" @click="back">BACK TO ORDER</button>
            <button type="button" class="success button" @click="confirm">CONFIRM</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'order-delivery',
    data() {
        return {
            shippingSpeed: '',
            userOrder: {
                firstName: '',
                lastName: '',
                street: '',
                zip: '',
                city:'',
                state:'',
                phone:'',
                email:''
            }
        }
    },
    computed: {
        
        getCart(){

            return this.$store.state.cart
        },
        getUser(){

            return this.$store.state.user
        }
    },
    methods: {
        
        back(){

            this.$emit('changeMode', true)
        },
        confirm(){

            this.$store.commit('setOrder',{
                user: this.userOrder,
                userID: this.getUser._id,
                productOrder: this.getCart,
                deliveryTerms: this.shippingSpeed
            })

            this.$router.push({name: 'Summary'})
        }
    }
}
</script>