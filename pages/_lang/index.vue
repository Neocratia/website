<template>
<v-layout column align-center>
  <v-flex xs12 sm10 md8 lg6 elevation-1 content-area>
    <ImageHeader />
    <HomeHeadline />
    <Testimonials />
    <JoinForm />
    <ManifestoEs v-if="$i18n.locale === 'es'"/>
    <Manifesto v-else/>
  <SpreadWord />
  </v-flex>
</v-layout>
</template>

<script>
import ImageHeader from '~/components/image-header'
import HomeHeadline from '~/components/home-headline'
import Testimonials from '~/components/testimonials'
import JoinForm from '~/components/join-form'
import Manifesto from '~/components/manifesto'
import ManifestoEs from '~/components/manifesto-es'
import SpreadWord from '~/components/spread-word'

export default {
  components: {
    ImageHeader,
    HomeHeadline,
    Testimonials,
    JoinForm,
    Manifesto,
    ManifestoEs,
    SpreadWord
  }
}
</script>