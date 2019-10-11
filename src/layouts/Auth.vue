<template>
  <q-layout class="container">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="stylus">
  .container
    background-color $deep-purple-13
</style>

<script>
export default {
  name: 'Auth'
}
</script>
