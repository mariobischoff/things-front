<template>
  <q-layout class="container">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="stylus">
  .container
    background-color $primary
</style>

<script>
export default {
  name: 'Auth'
}
</script>
