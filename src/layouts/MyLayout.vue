<template>
  <q-layout view="hHr Lpr fFr">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>Things App</q-toolbar-title>
        {{link}}
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
        >
          <q-tab name="things" label="Things" />
          <q-tab name="profile" label="profile" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="things">
<!-- list of things -->
            <div class=" list">
              <q-list class="text-grey">
                <q-item
                  clickable
                  v-ripple
                  :active="link === 'inbox'"
                  @click="link = 'inbox'"
                  active-class="link-thing"
                >
                  <q-item-section avatar>
                    <q-icon name="device_hub" />
                  </q-item-section>

                  <q-item-section>Thing1</q-item-section>
                </q-item>

                <q-item
                  clickable
                  v-ripple
                  :active="link === 'outbox'"
                  @click="link = 'outbox'"
                  active-class="link-thing"
                >
                  <q-item-section avatar>
                    <q-icon name="device_hub" />
                  </q-item-section>

                  <q-item-section>Thing2</q-item-section>
                </q-item>

                <q-item
                  clickable
                  v-ripple
                  :active="link === 'trash'"
                  @click="link = 'trash'"
                  active-class="link-thing"
                >
                  <q-item-section avatar>
                    <q-icon name="device_hub" />
                  </q-item-section>

                  <q-item-section>Thing3</q-item-section>
                </q-item>

              </q-list>
            </div>

          </q-tab-panel>
<!-- Profile information -->
          <q-tab-panel name="profile">
            <div class="text-h6">{{user.nameUser}}</div>
            <q-separator />
            <div class="q-pa-md">
              {{user.emailUser}}
            </div>
          </q-tab-panel>

        </q-tab-panels>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<style lang="stylus">
</style>

<script>
export default {
  data () {
    return {
      left: false,
      tab: 'things',
      link: 'inbox',
      user: {
        nameUser: 'Joaquim Ruanelito',
        emailUser: 'joaquim@hotmail.com'
      }
    }
  }
}
</script>
