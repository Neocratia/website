<template>
<v-layout column align-center class="page-team">
  <v-flex xs12 sm10 md8 lg6 elevation-1 content-area>
    <TeamList />
    <SpreadWord />
  </v-flex>
</v-layout>
</template>

<script>
import SpreadWord from '~/components/spread-word'
import TeamList from '~/components/team-list'
export default {
  components: {
    TeamList,
    SpreadWord
  },
  head () {
    return {
      titleTemplate: 'Our Team | Neocratia'
    }
  }
}
</script>
