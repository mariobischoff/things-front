<template>
  <q-layout view="hHr Lpr fFr">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          Things App
        </q-toolbar-title>

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
          narrow-indicator
        >
          <q-tab name="thing" label="Thing" />
          <q-tab name="profile" label="Profile" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="thing">
            <q-list bordered separator>
              <q-item clickable v-ripple v-for="thing in getThings" :key="thing._id">
                <q-item-section>{{ thing.name }}</q-item-section>
              </q-item>
            </q-list>
          </q-tab-panel>

          <q-tab-panel name="profile">
            <div class="text-h6">Profile</div>
            <q-item>
              <q-item-section avatar>
                <q-avatar color="primary" text-color="white">
                  {{ getEmail[0] }}
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>{{ getEmail }}</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-icon name="logout" color="red" @click="exit"/>
              </q-item-section>
            </q-item>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      tab: 'thing',
      widthDrawer: 350,
      left: false,
      right: false
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
