<template>
  <q-page class="flex flex-center">
    <thing/>
  </q-page>
</template>

<style lang="stylus" scoped>
</style>

<script>
import { mapActions } from 'vuex'
import Thing from '../components/Thing'

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
    ...mapActions(['store', 'loadThings']),
    clickButton () {
      console.log('dasdas')
      this.$socket.emit('setConfig', {
        id: 'dasdasdsa',
        config: { pump: true }
      })
    }
  },
  beforeMount () {
  },
  mounted () {
    this.loadThings()
  }
}
</script>
