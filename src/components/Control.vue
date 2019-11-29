<template>
  <div class="q-pa-md" style="max-width: 100%">
    <q-toggle v-model="auto" label="Automático"
      @input="() => {
        cooler = false
        pump = false
        onSubmit()}"/>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-list width="100%" >
        <q-item tag="label" v-ripple :disable=auto>
          <q-item-section>
            <q-item-label>Cooler</q-item-label>
          </q-item-section>
          <q-item-section avatar>
            <q-toggle color="primary" v-model="cooler" :disable=auto @input="onSubmit()" />
          </q-item-section>
        </q-item>

        <q-item tag="label" v-ripple :disable=auto>
          <q-item-section>
            <q-item-label>Bomba d'água</q-item-label>
          </q-item-section>
          <q-item-section avatar>
            <q-toggle color="primary" v-model="pump" :disable=auto @input="onSubmit()"/>
          </q-item-section>
        </q-item>
      </q-list>

      <div>
        <q-btn label="Restaurar" type="reset" color="primary" class="q-ml-sm"/>
      </div>
    </q-form>

  </div>
</template>

<script>
export default {
  name: 'Control',
  data () {
    return {
      auto: true,
      cooler: false,
      pump: false
    }
  },
  methods: {
    onSubmit () {
      let automatic = this.auto ? 1 : 0
      let cooler = this.cooler ? 1 : 0
      let pump = this.pump ? 1 : 0
      this.$socket.emit('setConfig', { automatic, cooler, pump })
      this.$q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Comandos enviados'
      })
    },
    onReset () {
      this.auto = true
      this.cooler = false
      this.pump = false
      this.$q.notify({
        color: 'red-5',
        textColor: 'white',
        icon: 'warning',
        position: 'top',
        message: 'Configuração restaurada'
      })
    }
  }
}
</script>
