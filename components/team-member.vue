<template>
    <v-flex xs12 :class="className">
        <v-card class=" darken-2 pa-2">
          <v-container fluid grid-list-md>
            <v-layout row>
              <v-flex xs6 sm7 md8>
                <div>
                  <div class="headline">{{ title }}</div>
                  <div>
                    <slot name="description"/>
                  </div>
                </div>
              </v-flex>
              <v-flex xs6 sm5 md4 text-xs-right>
                <slot name="image" />
              </v-flex>
            </v-layout>
              <div class="text-xs-right">
                <a :href="link" target="_blank">{{ $t('team.learn_more') }}</a>
              </div>
          </v-container>
        </v-card>   
    </v-flex>
</template>

<script type="text/javascript">
    export default{
        props: ["title", "link", "className"]
    }
</script>