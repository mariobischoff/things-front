<template>
  <q-page class="flex flex-center">
    <q-btn
      @click="clickButton()"
    >
      Ok
    </q-btn>
    <q-list> </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {

    }
  },
  methods: {
    clickButton () {
      this.$socket.send('legal')
    }
  },
  created () {
    this.$options.sockets.onmessage = (data) => console.log(data)
  }
}
</script>
