<template>
<v-layout column align-center>
  <v-flex xs12 sm10 md8 lg6 elevation-1 content-area>
    <v-card flat tile class="primary text-xs-center" height="55vmin">
      <v-layout fill-height justify-center>
        <v-card-title primary-title class="white--text headline px-5">
          Let's reinvent the way our laws are created.
        </v-card-title>
      </v-layout>
    </v-card>
    <v-card flat tile class="secondary text-xs-center" height="55vmin">
      <v-layout fill-height justify-center>
      <v-flex xs12>
        <div class="video-container">
          <iframe src="https://www.youtube.com/embed/ctvlUvN6wSE" frameborder="0" allowfullscreen></iframe>
        </div>
      </v-flex>    
      </v-layout>
    </v-card>

    <p class="subheading text-xs-center mt-5 px-5">
      Our goal is to bring honesty to all governments and societies by enabling citizens to make laws and decisions with transparency, accountability, liquid democracy, and thoughtful debate.
    </p>

    <v-card class="primary white--text mt-5">
      <v-container fluid grid-list-lg>
        <v-layout row align-center px-1 py-5>
          <v-flex xs3 lg2>
            <v-card-media src="https://cdn.onlinewebfonts.com/svg/img_383210.svg" height="16vmin" contain></v-card-media>
          </v-flex>
          <v-flex xs9 lg10>
            <div class="subheading">
              “Everything is awesome, everything is cool when your part of a team. Everything is awesome!”
            </div>
            <div class="title text-xs-right">Ellie Goulding</div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>

    <h2 class="text-xs-center headline mt-5">Join the movement</h2>

    <v-alert success value="true" v-if="form_success">
      Thank you! the information has been submitted.
    </v-alert>



  <v-form v-model="valid" ref="form"  class="mt-5 px-3" v-on:submit.prevent="submit" >

    <v-checkbox
      label="Stay Informed"
      v-model="interest"
      value="stay-informed"
      :rules="interestRules"
    ></v-checkbox>
    <v-checkbox
      label="Lead the movement locally"
      v-model="interest"
      value="lead-movement-locally"
      :rules="interestRules"
    ></v-checkbox>
    <v-checkbox
      label="Donate"
      v-model="interest"
      value="donate"
      :rules="interestRules"
    ></v-checkbox>
    <v-text-field
      label="E-mail"
      v-model="email"
      :rules="emailRules"
    ></v-text-field>

    <div class="text-xs-right">
      <v-btn @click="submit" primary dark large type="submit">JOIN</v-btn>
    </div>
  </v-form>

    <v-card flat tile class="primary text-xs-center mt-5" height="25vmin">
      <v-layout fill-height justify-center>
        <v-card-title primary-title class="white--text headline">
          Learn more:
        </v-card-title>
      </v-layout>
    </v-card>

    <v-expansion-panel class="my-3 px-2">
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

    <v-card class="primary white--text mt-4">
      <v-container fluid grid-list-lg>
        <v-layout column align-center justify-center>
          <v-card-title primary-title class="white--text title">
            Spread the word:
          </v-card-title>
          <div class="mb-4 spread-the-word">
              
            <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.neocratia.org/" target="_blank" class="button">
            <v-btn light class="square" >
              <v-icon x-large primary>mdi-facebook</v-icon>
            </v-btn>
            </a>
            <a href="https://api.whatsapp.com/send?text=Check https%3A//www.neocratia.org/" data-action="share/whatsapp/share" class="button" target="_blank">
            <v-btn light class="square">
              <v-icon x-large primary>mdi-whatsapp</v-icon>
            </v-btn>
            </a>
            <a href="https://twitter.com/home?status=Check https%3A//www.neocratia.org/" class="button" target="_blank">
            <v-btn light class="square">
              <v-icon x-large primary>mdi-twitter</v-icon>
            </v-btn>
            </a>
          </div>
        </v-layout>
      </v-container>
    </v-card>

  </v-flex>
</v-layout>
</template>

<script>
  var firebase = require('firebase');
  export default {
    data () {
      return {
        valid: false,
        email: '',
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        interestRules: [
          (v) => v.length>0 || 'Please choose at least one interest'
        ],
        stay_informed: false,
        lead_movement: false,
        donate: false,
        interest: [],
        form_success: false
      }
    },
    methods: {
      submit () {
        console.log(this.$refs.form.validate());
        if( this.$refs.form.validate() && !this._data.form_success){
          console.log(this._data.interest);
          console.log(this._data.email);

          var interest = this._data.interest;
          var email = this._data.email;
          var timestamp = Number(new Date());


          firebase.database().ref('contacts/' + timestamp).set({
              interest: interest,
              email: email
            });
          this._data.form_success = true;
          this.$refs.form.reset()
        }

      },
      clear () {
        this.$refs.form.reset()
      }
    }

  }
</script>