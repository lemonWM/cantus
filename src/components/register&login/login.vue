<template>
    <div class="grid-y register-wrapper">  
        <div>
            <h2>SIGN INTO YOUR ACCOUNT</h2>
            <h3>Please sign in using your email and password. </h3>
        </div> 
        <form class="form">
            <div class="grid-container">
                <div class="grid-x grid-padding-x form-wrapper">
                    <div class="medium-3 cell">
                        <label>
                        <input type="text" placeholder="EMAIL ADDRESS"  v-model.lazy="email" @input="$v.email.$touch()">
                             <p class="form-input-hint" v-if="!$v.email.email">Not correct email format</p>
                        </label>
                    </div>
                    <div class="medium-3 cell">
                        <label>
                        <input type="password" placeholder="PASSWORD"  v-model="password" @blur="$v.password.$touch()">
                            <p class="form-input-hint" v-if="!$v.password.minLength">Required min. 5 signs</p>
                        </label>
                    </div>

                    <button type="button" class="button"  :disabled='$v.$invalid' @click="login">CREATE ACCOUNT</button>
                </div>
            </div>
        </form>
        <div>
        <p>If you don't have an account, no problem. 
            <router-link :to="{name: 'register'}"> Create an account now.</router-link>
        </p>
        </div>
    </div>
</template>

<script>

import {validationMixin} from 'vuelidate';
import {required, minLength, email} from 'vuelidate/lib/validators';
import decode from 'jwt-decode'
import {login} from '../../utils/token'

export default {
    name: 'user-login',
    mixins: [validationMixin],
    data() {
        return {
            email: '',
            password: '',
            error: false,
        }
    },
    methods: {
        login(){ 

            this.error = false 

            this.axios.post('/login', {

                 email: this.email,
                 password: this.password
            }) 
            .then(({ data }) => {

                const token = data.token
                const user = data.findedUser

                login(token)

                this.setUser(user)

                this.$router.push({name: 'home'})     
            })
            .catch((error) => {
                
                this.error = true
            })
        },
        setUser(user){

            this.$store.commit('setUser', {
                user: user
            })
        }
    },
    validations: {
        email: {
            required,
            email
        },
        password: {
            required,
            minLength: minLength(5)
        }
    }
}
</script>

<style scoped>

.register-wrapper{
    align-items: center;
}

.form-wrapper{
    flex-direction: column;
    align-items: center;
}

.form{
    width: 100%;
}
</style>