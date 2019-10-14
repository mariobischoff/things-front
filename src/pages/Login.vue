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

        <q-card-actions align="around">
          <q-btn flat color="deep-purple-13" type="submit" label="Register" to="/auth/register"/>
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
      email: 'mario@gmail.com',
      password: '',
      isPwd: true
    }
  },
  methods: {
    onLogin () {
      if (this.email === 'mario@gmail.com' && this.password === '123') {
        this.$router.push('/dashboard')
      } else {
        this.$q.notify('Email or password invalid!')
      }
    }
  }
}
</script>
