<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md q-ma-md card-register shadow-4" style="max-width: 500px">
      <h4 class="text-center">Register</h4>
      <q-form
        @submit="onRegister"
        class="q-gutter-md"
      >

        <q-input
          filled
          color="deep-purple-13"
          v-model="email"
          label="Email"
          lazy-rules
          :rules="[ emailValid(email) || 'Please type a valid email' ]"
        >
          <template v-slot:prepend>
            <q-icon name="mail" />
          </template>
        </q-input>

        <q-input
          v-model="password"
          filled
          color="deep-purple-13"
          :type="isPwd ? 'password' : 'text'"
          label="Password"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>

        <q-input
          v-model="repassword"
          filled
          color="deep-purple-13"
          :type="isPwd1 ? 'password' : 'text'"
          label="Repassword"
          lazy-rules
          :rules="[ repassword => repassword === password || 'Please type same password' ]"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd1 ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd1 = !isPwd1"
            />
          </template>
        </q-input>

        <q-card-actions align="around">
          <q-btn flat color="deep-purple-13" type="submit" label="Back" to="/auth/login"/>
          <q-btn class="btn-login" color="deep-purple-13" type="submit" label="Register" />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-page>
</template>

<style lang="stylus">
  .card-register
    width 350px
    background-color $deep-purple-1
    h4
      color $grey-7
    .btn-login
      width 150px
</style>

<script>
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      repassword: '',
      isPwd: true,
      isPwd1: true
    }
  },
  methods: {
    emailValid (email) {
      let regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return regexp.test(email) === true
    },
    onRegister () {
      console.log('registrando')
    }
  }
}
</script>
