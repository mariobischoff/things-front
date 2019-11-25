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
          color="primary"
          v-model="formData.email"
          label="E-mail"
        >
          <template v-slot:prepend>
            <q-icon name="mail" />
          </template>
        </q-input>

        <q-input
          v-model="formData.password"
          filled
          color="primary"
          :type="isPwd ? 'password' : 'text'"
          label="Senha"
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
          <q-btn flat color="secondary" type="submit" label="Cadastrar" to="/auth/register"/>
          <q-btn class="btn-login" color="secondary" type="submit" label="Entrar" />
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
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      formData: {
        email: 'mariobischoff@gmail.com',
        password: '123123'
      },
      isPwd: true
    }
  },
  computed: {
    ...mapGetters(['getError', 'getToken'])
  },
  methods: {
    ...mapActions(['store', 'login']),
    async onLogin () {
      await this.login(this.formData)
      if (this.getToken) {
        this.$router.push('/')
      } else {
        this.$q.notify(this.getError)
      }
    }
  }
}
</script>
