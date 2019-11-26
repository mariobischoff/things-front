<template>
  <q-card style="min-width: 350px">
    <q-card-section>
      <div class="text-h6">Register Device</div>
    </q-card-section>

    <q-card-section>
      <q-input v-model="thing.name" label="Nome do Dispositivo" aria-selected="false" />
    </q-card-section>

    <q-card-actions align="right" class="text-primary">
      <q-btn flat label="CANCELAR" v-close-popup />
      <q-btn color="primary" label="REGISTRAR" v-close-popup />
    </q-card-actions>
  </q-card>
</template>

<style lang="stylus" scoped>

</style>

<script>
export default {
  name: 'RegisterDevice',
  data () {
    return {
      thing: {
        name: ''
      }
    }
  }
}
</script>
