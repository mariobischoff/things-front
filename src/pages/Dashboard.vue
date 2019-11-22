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
      values: []
    }
  },
  methods: {
    ...mapActions(['store', 'loadThings'])
  },
  beforeMount () {
  },
  mounted () {
    this.loadThings()
  }
}
</script>
