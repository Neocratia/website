<template>
<v-app toolbar footer>
  <v-navigation-drawer persistent clipped enable-resize-watcher :floating="false" v-model="drawer">
    <v-list>
      <v-list-tile router v-for="(item, i) in items" :key="i" :to="item.to">
        <v-list-tile-action>
          <v-icon v-html="item.icon"></v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
  <v-toolbar fixed>
    <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title>
      <img src="/logo.png" alt="neocratia logo">
    </v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
  <main>
    <v-container fluid>
      <nuxt />
    </v-container>
  </main>

</v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      fixed: false,
      items: [{icon: 'home', title: 'Home', to: '/'},
              {icon: 'people', title: 'Team', to: '/team'},
             ],
      title: 'Neocratia'
    }
  }
}
</script>