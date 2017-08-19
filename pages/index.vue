<template>
<v-layout column align-center>
  <v-flex xs12 sm10 md8 lg6>
    <v-card flat tile class="primary text-xs-center" height="40vmin">
      <v-layout fill-height justify-center>
        <v-card-title primary-title class="white--text display-1">
          Let's reinvent the way our laws are created.
        </v-card-title>
      </v-layout>
    </v-card>
    <v-card flat tile class="secondary text-xs-center" height="40vmin">
      <v-layout fill-height justify-center>
        <v-card-title primary-title class="white--text display-1">
          VIDEO
        </v-card-title>
      </v-layout>
    </v-card>

    <p class="headline text-xs-center mt-5">
      Our goal is to bring honesty to all governments and societies by enabling citizens to make laws and decisions with transparency, accountability, liquid democracy, and thoughtful debate.
    </p>

    <v-card class="primary white--text mt-5">
      <v-container fluid grid-list-lg>
        <v-layout row align-center>
          <v-flex xs3 lg2>
            <v-card-media src="https://cdn.onlinewebfonts.com/svg/img_383210.svg" height="16vmin" contain></v-card-media>
          </v-flex>
          <v-flex xs9 lg10>
            <div class="headline">
              “Everything is awesome, everything is cool when your part of a team. Everything is awesome!”
            </div>
            <div class="title text-xs-right">Ellie Goulding</div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>

    <h2 class="text-xs-center display-1 mt-5">Join the movement</h2>

    <v-alert success value="true" v-if="form_success">
      Thank you! the information has been submitted.
    </v-alert>
    <v-alert error value="true" v-if="form_error">
      There is an error in the provided information. Please validate the information and try again.
    </v-alert>
    <form class="mt-5"  v-on:submit.prevent v-if="!form_success">
      <v-radio v-model="interest" color="primary" class="pt-0 pb-0 title" label="Stay informed" value="stay-informed"></v-radio>
      <v-radio v-model="interest" color="primary" class="pt-0 pb-0 title" label="Lead the movement locally" value="lead-the-movement-locally"></v-radio>
      <v-radio v-model="interest" color="primary" class="pt-0 pb-0 title" label="Donate" value="donate"></v-radio>
      <v-text-field v-model="email" name="email" label="Your email address"></v-text-field>
      <div class="text-xs-right">
        <v-btn primary dark large type="submit"  v-on:click="processData">JOIN</v-btn>
      </div>
    </form>

    <v-card flat tile class="primary text-xs-center mt-5" height="20vmin">
      <v-layout fill-height justify-center>
        <v-card-title primary-title class="white--text display-1">
          Learn more:
        </v-card-title>
      </v-layout>
    </v-card>

    <v-expansion-panel class="mt-3">
      <v-expansion-panel-content>
        <div slot="header">Origins of our movement</div>
        <v-card>
          <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
        </v-card>
      </v-expansion-panel-content>
      <v-expansion-panel-content>
        <div slot="header">Our values and premises</div>
        <v-card>
          <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
        </v-card>
      </v-expansion-panel-content>
      <v-expansion-panel-content>
        <div slot="header">How laws and decisions are made</div>
        <v-card>
          <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
        </v-card>
      </v-expansion-panel-content>
      <v-expansion-panel-content>
        <div slot="header">Our roadmap</div>
        <v-card>
          <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
        </v-card>
      </v-expansion-panel-content>
      <v-expansion-panel-content>
        <div slot="header">Volunteering</div>
        <v-card>
          <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
        </v-card>
      </v-expansion-panel-content>
      <v-expansion-panel-content>
        <div slot="header">Donating</div>
        <v-card>
          <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
        </v-card>
      </v-expansion-panel-content>
      <v-expansion-panel-content>
        <div slot="header">Our team</div>
        <v-card>
          <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-card class="primary white--text mt-5">
      <v-container fluid grid-list-lg>
        <v-layout column align-center justify-center>
          <v-card-title primary-title class="white--text display-1">
            Spread the word:
          </v-card-title>
          <div class="mb-4">
            <v-btn light class="square">
              <v-icon x-large primary>mdi-facebook</v-icon>
            </v-btn>
            <v-btn light class="square">
              <v-icon x-large primary>mdi-whatsapp</v-icon>
            </v-btn>
            <v-btn light class="square">
              <v-icon x-large primary>mdi-twitter</v-icon>
            </v-btn>
          </div>
        </v-layout>
      </v-container>
    </v-card>

  </v-flex>
</v-layout>
</template>

<script>
  var firebase = require('firebase');

  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  export default {
    data () {
      return {
        interest: null,
        email: null,
        form_error: false,
        form_success: false,
        form_errors: {}
      }
    },
    methods: {
      processData(event){
        console.log(this._data.interest);
        console.log(this._data.email);

        var interest = this._data.interest;
        var email = this._data.email;
        var timestamp = Number(new Date());

        if(!email || !interest || !validateEmail(email)){
          this._data.form_error = true;
        }else{
          firebase.database().ref('contacts/' + timestamp).set({
              interest: interest,
              email: email
          });

          this._data.form_success = true;
          this._data.form_error = false;        
        }



        return false;
      }
    }
  }
</script>