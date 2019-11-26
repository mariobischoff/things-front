<template>
  <q-card style="min-width: 350px">
    <q-card-section>
      <div class="text-h6">Settings Profile</div>
    </q-card-section>

    <q-card-section>
      <q-input
        v-model="user.email"
        label="E-mail"
        aria-selected="false"
        type="email"
      />

      <q-expansion-item
        v-model="pass"
        expand-separator
        dense-toggle
        label="ALTERAR SENHA"
      >
        <q-card-section aria-expanded="true">
          <q-input
            v-model="user.password"
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
          <q-input
            v-model="user.repassword"
            color="primary"
            :type="isRePwd ? 'password' : 'text'"
            label="Confirmação de senha"
          >
            <template v-slot:append>
              <q-icon
                :name="isRePwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isRePwd = !isRePwd"
              />
            </template>
          </q-input>
        </q-card-section>
      </q-expansion-item>
    </q-card-section>

    <q-card-actions align="right" class="text-primary">
      <q-btn flat label="CANCELAR" v-close-popup />
      <q-btn color="primary" label="ALTERAR" v-close-popup />
    </q-card-actions>
  </q-card>
</template>

<style lang="stylus" scoped>
.q-expansion-item
  color $secondary
  font-weight 450
</style>

<script>
export default {
  name: 'SettingsProfile',
  data () {
    return {
      user: {
        email: '',
        password: '',
        repassword: ''
      },
      pass: false,
      isPwd: true,
      isRePwd: true
    }
  }
}
</script>
