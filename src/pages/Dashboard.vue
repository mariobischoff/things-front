<template>
  <q-page class="flex flex-center">
    <div class="content">
      <thing />
      <q-separator />
      <control />
    </div>
  </q-page>
</template>

<style lang="stylus" scoped>
</style>

<script>
import { mapActions } from 'vuex'
import Thing from '../components/Thing'
import Control from '../components/Control'

export default {
  name: 'Dashboard',
  components: {
    thing: Thing,
    control: Control
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
