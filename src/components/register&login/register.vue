<template>
    <div class="grid-y acount-wrapper">  
        <div class="title">
            <h2>Create account with Cantus</h2>
        </div> 
        <form class="form">
            <div class="grid-container">
                <div class="grid-x grid-padding-x form-wrapper">
                    <div class="medium-3 cell">
                        <label>
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="FIRST NAME" v-model.lazy="firstName" @input="$v.firstName.$touch()">
                            <p class="form-input-hint" v-if="!$v.firstName.minLength">Require min 3 signs</p>
                        </label>
                    </div>
                    <div class="medium-3 cell">
                        <label>
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="LAST NAME" v-model.lazy="lastName" @input="$v.lastName.$touch()">
                            <p class="form-input-hint" v-if="!$v.lastName.minLength">Require min 3 signs</p>
                        </label>
                    </div>
                    <div class="medium-3 cell">
                        <label>
                        <i class="fa fa-envelope"></i>
                        <input type="text" placeholder="EMAIL ADDRESS"  v-model.lazy="email" @input="$v.email.$touch()">
                             <p class="form-input-hint" v-if="!$v.email.email">Not correct email format</p>
                             <p class="form-input-hint" v-if="!$v.email.unique">This address is already in use</p>
                        </label>
                    </div>
                    <div class="medium-3 cell">
                        <label>
                        <i class="fas fa-key"></i>
                        <input type="password" placeholder="PASSWORD"  v-model.lazy="password" @blur="$v.password.$touch()">
                            <p class="form-input-hint" v-if="!$v.password.minLength">Required min. 5 signs</p>
                        </label>
                    </div>
                    <div class="medium-3 cell">
                        <label>
                        <i class="fas fa-key"></i>
                        <input type="password" placeholder="REPEAT PASSWORD" v-model="passwordConfirm" @blur="$v.passwordConfirm.$touch()">
                            <p class="form-input-hint" v-if="!$v.passwordConfirm.sameAs">Passwords are differents</p>
                        </label>
                    </div>
                    <button type="button" class="button"  :disabled='$v.$invalid' @click="register">CREATE ACCOUNT</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>


import {validationMixin} from 'vuelidate';
import {required, minLength, email, sameAs} from 'vuelidate/lib/validators';

export default {
    name: 'register-form',
    mixins: [validationMixin],
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirm:'',
            error: false,
            registerError: false
        }
    },
    methods: {
        
        register(){
            
            let date = new Date()

            this.axios.post('/user/register', {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    password: this.password,
                    registered: date
                   
            })
            .then(({data}) => {
                    
                setTimeout(() => {
                        
                    this.$router.push({name: 'login'})
                }, 1000);
            })
            .catch((error) => {
                    
                this.registerError = true

                setTimeout(() => {
                    window.location.reload()
                }, 500);
            })
        }
    },
    validations: {
        email: {
            required,
            email,
            unique(value){
                
                if( value === ''){
                    
                    return true
                } else {
                
                return this.axios.post('/userMail', {
                            
                            email: value
                        })            
                        .then(response => {
                            
                            return response.data.unique             
                        })
                }  
            }
        },
        firstName: {
            required,
            minLength: minLength(3)
        },
        lastName: {
            required,
            minLength: minLength(3)
        },
        password: {
            minLength: minLength(5),
            required
        },
        passwordConfirm: {
            required,
            sameAs: sameAs('password')
        }
    }
}
</script>
