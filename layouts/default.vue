<template>
<v-app toolbar footer>
  <v-toolbar fixed>
    <v-toolbar-title>
      <nuxt-link to="/">
      <img src="/logo.png" alt="neocratia logo">
      </nuxt-link>
      </a>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="navigation-bar">
      <nuxt-link to="/team">
      OUR TEAM
      </nuxt-link>
    </a>
    </div>
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