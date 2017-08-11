<template>
<v-layout column align-center>
  <v-flex xs12 sm10 md8 lg6>
    <v-card flat tile class="primary text-xs-center" height="300px">
      <v-layout fill-height justify-center>
        <v-card-title primary-title class="white--text display-1">
          Let's reinvent the way our laws are created.
        </v-card-title>
      </v-layout>
    </v-card>
    <v-card flat tile class="secondary text-xs-center" height="300px">
      <v-card-title primary-title class="white--text display-1">
        VIDEO HERE
      </v-card-title>
    </v-card>

    <p class="headline text-xs-center mt-5">
      Our goal is to bring honesty to all governments and societies by enabling citizens to make laws and decisions with transparency, accountabilty, liquid democracy, and thoughtful debate.
    </p>

    <hr class="mt-5 mb-5" />

    <h2 class="text-xs-center display-1">Join the movement</h2>
    <form method="get" action="">
      <v-radio v-model="interest" color="primary" class="pt-0 pb-0 title" label="Stay informed" value="stay-informed"></v-radio>
      <v-radio v-model="interest" color="primary" class="pt-0 pb-0 title" label="Lead the movement locally" value="lead-the-movement-locally"></v-radio>
      <v-radio v-model="interest" color="primary" class="pt-0 pb-0 title" label="Donate" value="donate"></v-radio>
      <v-text-field v-model="email" name="email" label="Your email address"></v-text-field>
      <div class="text-xs-right">
        <v-btn primary dark large type="submit">JOIN</v-btn>
      </div>
    </form>

    <v-card flat tile class="primary text-xs-center mt-5" height="150px">
      <v-layout fill-height justify-center>
        <v-card-title primary-title class="white--text display-1">
          Learn more:
        </v-card-title>
      </v-layout>
    </v-card>

    <v-expansion-panel class="mt-3">
      <v-expansion-panel-content v-for="(item,i) in 5" :key="i">
        <div slot="header">Item</div>
        <v-card>
          <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>


  </v-flex>
</v-layout>
</template>

<script>
export default {
  data() {
    return {
      interest: null,
      email: null
    }
  }
}
</script>
