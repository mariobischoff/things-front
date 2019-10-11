<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md q-ma-md card-login shadow-4" style="max-width: 500px">
      <h4 class="text-center">Login</h4>
      <q-form
        @submit="onLogin"
        class="q-gutter-md"
      >
        <q-input
          filled
          color="deep-purple-13"
          v-model="email"
          label="Email"
        />

        <q-input
          filled
          color="deep-purple-13"
          type="password"
          v-model="password"
          label="Password"
        />
        <q-card-actions align="around">
          <q-btn flat color="deep-purple-13" type="submit" label="Register"/>
          <q-btn class="btn-login" color="deep-purple-13" type="submit" label="Login" />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-page>
</template>

<style lang="stylus">
  .card-login
    width 350px
    background-color $deep-purple-1
    h4
      color $grey-7
    .btn-login
      width 150px
</style>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    onLogin () {
      console.log('tentando logar')
    }
  }
}
</script>
