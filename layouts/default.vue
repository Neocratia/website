<template>
<v-app toolbar footer>
  <v-toolbar fixed>
    <v-toolbar-title><span class="primary--text">neo</span>cratia</v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
  <main>
    <v-container fluid main-container>
      <nuxt />
    </v-container>
  </main>
</v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [{icon: 'home', title: 'Home', to: '/'},
              {icon: 'people', title: 'About us', to: '/inspire'},
              {icon: 'mail', title: 'Contact', to: '/contact'}
             ],
    }
  }
}
</script>
