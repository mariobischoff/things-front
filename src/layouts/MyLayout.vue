<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="header">
      <q-toolbar>
        <q-toolbar-title>
          Things App
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="stylus">
  .header
    background-color $deep-purple-12
</style>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
    }
  }
}
</script>
