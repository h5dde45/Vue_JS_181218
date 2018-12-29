<template>
  <div class="container">
    <form class="pt-3">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email"
               class="form-control "
               :class="{'is-invalid': $v.email.$error}"
               @blur="$v.email.$touch()"
               v-model="email">
        <div class="invalid-feedback" v-if="!$v.email.required">Email field is required</div>
        <div class="invalid-feedback" v-if="!$v.email.email">Email incorrect</div>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password"
               class="form-control "
               :class="{'is-invalid': $v.password.$error}"
               @blur="$v.password.$touch()"
               v-model="password">
        <div class="invalid-feedback" v-if="!$v.password.minLength">
          The minimum password is {{$v.password.$params.minLength.min}} letters. Now it is only {{password.length}}
        </div>
      </div>
      <div class="form-group">
        <label for="confirm">Confirm password</label>
        <input type="password" id="confirm"
               class="form-control "
               :class="{'is-invalid': $v.confirmPassword.$error}"
               @blur="$v.confirmPassword.$touch()"
               v-model="confirmPassword">
        <div class="invalid-feedback" v-if="!$v.confirmPassword.sameAs">
          Different passwords
        </div>
      </div>

    </form>
  </div>
</template>

<script>
  import {required, email, minLength, sameAs} from 'vuelidate/lib/validators'
  export default {
    data(){
      return {
        email: '',
        password: '',
        confirmPassword:''
      }
    },
    validations: {
      email: {
        required: required,
        email: email
      },
      password: {
        minLength: minLength(6)
      },
      confirmPassword: {
        sameAs: sameAs('password')
      }
    }
  }
</script>

<style>
  body {
    background: darkgrey;
  }


</style>
