<template>
    <v-card flat tile class="secondary text-xs-center">
      <v-layout fill-height justify-center>
        <v-flex xs12>
        <v-parallax src="/img/neocratia-main-reduced.jpg" height="590" class="scrim main-image">
          <v-layout row wrap justify-center align-center>
            <v-flex class="xs6"></v-flex>
            <v-flex class="xs6">
            <h3 class="white--text">{{ $t('home.main_heading') }}</h3>
            </v-flex>
          </v-layout>
        </v-parallax>
        </v-flex>
      </v-layout>
    </v-card>
</template>