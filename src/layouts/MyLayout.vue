<template>
  <q-layout view="hHr Lpr fFr">
    <q-header class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>Things App</q-toolbar-title>

        <q-item-section side>
          <q-btn color="white" text-color="primary" push @click="exit">
            <div class="row items-center no-wrap">
              <q-icon left name="logout" />
                Sair
            </div>
          </q-btn>
        </q-item-section>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" :width="widthDrawer" side="left" bordered>
       <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
        >
          <q-tab name="thing" label="Dispositivos" />
          <q-tab name="profile" label="Perfil" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab"  animated>
          <q-tab-panel name="thing">
            <q-list class="text-grey">

              <q-item
                v-for="thing in getThings" :key="thing._id"
                clickable
                v-ripple
                :active="link === thing.name"
                @click="link = thing.name"
                active-class="thing-link"
              >
                <q-item-section avatar>
                  <q-icon name="device_hub" />
                </q-item-section>

                <q-item-section>{{ thing.name }}</q-item-section>
              </q-item>

            </q-list>
          </q-tab-panel>

          <q-tab-panel name="profile">
            <div class="q-ma-md perfil">
                <q-avatar class="q-ma-md" size="600%" color="primary" text-color="white">
                  {{ getEmail[0] }}
                </q-avatar>
              <q-item-section>
                <q-item-label>{{ getEmail }}</q-item-label>
              </q-item-section>
            </div>

            <q-separator />
            <div class="btn">
              <q-btn label="Register Device" icon-right="device_hub" outline color="primary" />
              <q-btn label="Settings Profile" icon-right="build" outline color="primary" />
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<style lang="stylus">
.thing-link
  color: $primary
.perfil, .btn
  display flex
  flex-direction column
  align-items center
  justify-content center
  .q-btn
    margin-top 3%
    width 70%
</style>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      tab: 'thing',
      widthDrawer: 350,
      left: false,
      link: ''
    }
  },
  computed: {
    ...mapActions(['logout']),
    ...mapGetters(['getEmail', 'getThings', 'getToken'])
  },
  methods: {
    exit () {
      this.$router.replace('/auth/login')
      this.logout()
    }
  }
}
</script>
