<template>
<div>
    <v-card class="primary white--text pb-5" >
      <h2 class="text-xs-center headline py-5"  v-if="show_form">{{ $t('global.choose_one_or_more') }}:</h2>
      <p class="text-xs-center pt-5" v-if="!show_form">{{ $t('global.thanks_form_sent') }}</p>
      <v-form v-model="valid" ref="form" class=" px-4 join-form white--text" v-on:submit.prevent="submit" v-if="show_form">

        <v-checkbox :label="$t('global.stay_informed')" v-model="interest" value="stay-informed"></v-checkbox>
        <v-checkbox :label="$t('global.volunteer')" v-model="interest" value="volunteer"></v-checkbox>
        <v-checkbox :label="$t('global.lead_local_movement')" v-model="interest" value="lead-movement-locally"></v-checkbox>
        <v-checkbox :label="$t('global.contribute_open_source')" v-model="interest" value="contribute-open-source"></v-checkbox>
        <v-checkbox :label="$t('global.donate')"  v-model="interest" value="donate"></v-checkbox>
        <v-text-field :label="$t('global.your_email_address')" v-model="email" :rules="emailRules"></v-text-field>

        <div class="text-xs-center">
          <v-btn @click="submit" large type="submit" class="primary--text">{{ $t('global.join') }}</v-btn>
        </div>
      </v-form>
    </v-card>
  <v-dialog v-model="dialog" persistent width="320">
    <v-card>
      <v-card-title>
      </v-card-title>
      <v-card-text class="title text-xs-center">{{ $t('global.keep_posted_form_sent') }}</v-card-text>
      <v-container fluid grid-list-lg class="primary white--text mt-4">
        <v-layout column align-center justify-center>
          <v-card-title primary-title class="white--text title">
            {{ $t('global.spread_the_word') }}:
          </v-card-title>
          <div class="mb-4 spread-the-word">

            <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.neocratia.org/" target="_blank" class="button">
              <v-btn light class="square">
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
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="primary--text darken-1" flat="flat" @click.native.stop="dialog = false">CLOSE</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</div>
</template>

<script>
var firebase = require('firebase');
var vueSmoothScroll = require('vue-smoothscroll');
var axios = require('axios');
// Vue.use(vueSmoothScroll);
const API_URL = process.env.api_url;


export default {
  data() {
    return {
      valid: false,
      email: '',
      emailRules: [
        (v) => !!v || 'Your email address is required',
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      interestRules: [
        (v) => v.length > 0 || 'Please choose an option'
      ],
      stay_informed: true,
      lead_movement: false,
      donate: false,
      interest: [],
      dialog: false,
      interest: ['stay-informed'],
      show_form: true,
      show_arrows: true,
      msg: {
        global: {
          stay_informed: 'asdadsa'
        }
      }
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {

        var interest = this._data.interest;
        var email = this._data.email;
        var timestamp = Number(new Date());


        firebase.database().ref('contacts/' + timestamp).set({
          interest: interest,
          email: email
        });
        this._data.dialog = true;
        this.$refs.form.reset()
        this._data.show_form = false;

        if(email){
          axios.post(API_URL + '/contacts/', {
            email: email,
            interests: interest
          },{headers: { "Content-Type": "application/json" }});
        }
      }

    },
    clear() {
      this.$refs.form.reset()
    },
    checkboxChange(element) {
      console.log(element);
      this.$refs.form.validate()
    }
  }
}
</script>