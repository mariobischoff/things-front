<template>
  <q-layout view="hHr Lpr fFr">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          Things App
        </q-toolbar-title>

      </q-toolbar>

    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <q-tabs align="left">
        <q-route-tab to="/page1" label="Things" />
        <q-route-tab to="/page2" label="Perfil" />
      </q-tabs>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false,
      right: false,
      user: {
        name: '',
        email: '',
        lastLogin: ''
      }
    }
  }
}
</script>
