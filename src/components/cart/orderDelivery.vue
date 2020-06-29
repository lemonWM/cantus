<template>
    <div>  
        <div>
            <h2>Where would you like this order delivered?</h2>
        </div> 
        <form>
            <div class="grid-container">
                <div class="grid-x grid-padding-x">
                    <div class="medium-6 cell">
                        <input type="text" placeholder="FIRST NAME" v-model.lazy="userOrder.firstName" @input="$v.userOrder.firstName.$touch()">
                        <p class="form-input-hint" v-if="!$v.userOrder.firstName.minLength">min 2 signs</p>
                    </div>
                    <div class="medium-6 cell">
                        <input type="text" placeholder="LAST NAME" v-model.lazy="userOrder.lastName" @input="$v.userOrder.lastName.$touch()">
                         <p class="form-input-hint" v-if="!$v.userOrder.lastName.minLength">min 2 signs</p>
                    </div>
                     <div class="medium-12 cell">
                        <input type="text" placeholder="STREET ADDRESS" v-model.lazy="userOrder.street" @input="$v.userOrder.street.$touch()">
                        <p class="form-input-hint" v-if="!$v.userOrder.street.minLength">min 2 signs</p>
                    </div>
                    <div class="medium-4 cell">
                        <input type="text" placeholder="ZIP" v-model.lazy="userOrder.zip" @input="$v.userOrder.zip.$touch()">
                        <p class="form-input-hint" v-if="!$v.userOrder.zip.zipFormat">Not correct format ex: 00-000</p>
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
        <pre>{{$v.userOrder.firstName}}</pre>
    </div>
</template>

<script>

import {validationMixin} from 'vuelidate';
import {required, minLength, email, numeric} from 'vuelidate/lib/validators';

export default {
    name: 'order-delivery',
    mixins: [validationMixin],
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
    },
    validations: {
        userOrder: {
            firstName: {
                minLength: minLength(2),
                required
            },
            lastName: {
                minLength: minLength(2),
                required
            },
            street: {
                minLength: minLength(2),
                required
            },
            zip: {
                required,
                zipFormat(value){

                    let reg = /\d{2}\-\d{3}/ig

                    if(reg.test(value) || value.length === 0){
                        
                        return true
                    } 

                    return false
                }
            }
        }
    }
}
</script>