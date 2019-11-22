<template>
  <q-page class="flex flex-center">
    <thing></thing>
    <q-btn @click="clickButton()">hello</q-btn>
  </q-page>
</template>

<style lang="stylus" scoped>
</style>

<script>
import ThingComponent from '../components/Thing'
const Thing = new ThingComponent()
export default {
  name: 'Dashboard',
  components: {
    thing: Thing
  },
  data () {
    return {

    }
  },
  sockets: {
    connect: () => {
      console.log('socket connected')
    }
  },
  methods: {
    clickButton () {
      console.log('dasdas')
      this.$socket.emit('setConfig', {
        id: 'dasdasdsa',
        config: { pump: true }
      })
    }
  },
  beforeMount () {
    this.$options.sockets.onmessage = data => console.log(data)
  },
  mounted () {
  }
}
</script>
