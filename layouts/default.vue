<template>
<v-app toolbar footer>
  <v-toolbar fixed>
    <v-toolbar-title>
      <nuxt-link :to="$i18n.path('')">
      <img src="/logo.png" alt="neocratia logo">
      </nuxt-link>
      </a>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="navigation-bar">
      <nuxt-link :to="$i18n.path('team')">
      {{ $t('links.our_team') }}
      </nuxt-link>
    <v-menu offset-y >
      <v-btn class="btn-language" color="primary" flat light slot="activator" v-if="$i18n.locale === 'en'">EN</v-btn>
      <v-btn class="btn-language" color="primary" flat light slot="activator" v-else>ES</v-btn>
      <v-list class="language-selector">
        <v-list-tile v-if="$i18n.locale === 'en'">
          <v-list-tile-title>
          <nuxt-link  :to="`/es` + $route.fullPath" exact>
          ES
          </nuxt-link>
        </v-list-tile-title>
        </v-list-tile>
        <v-list-tile v-else>
          <v-list-tile-title>
          <nuxt-link  :to="$route.fullPath.replace(/^\/[^\/]+/, '')" exact>
          EN
          </nuxt-link>
        </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
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
}
</script>