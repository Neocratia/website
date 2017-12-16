<template>
<v-layout column align-center class="page-team">
  <v-flex xs12 sm10 md8 lg6 elevation-1 content-area>
    <v-card class="py-3 px-3">
      <v-layout fill-height justify-center>
        <v-card-title primary-title class="text-xs-center headline">
          At Neocratia, we're all volunteers.
        </v-card-title>
      </v-layout>
      <v-layout row wrap mt-4>
          <v-flex xs12>
            <v-card class=" darken-2 pa-2">
              <v-container fluid grid-list-md>
                <v-layout row>
                  <v-flex xs6 sm7 md8>
                    <div>
                      <div class="headline">Alexander Torrenegra</div>
                      <div>Alexander Torrenegra is a Colombian-American activist and entrepreneur. He founded multiple companies including Torre, Bunny Inc., and Voice123. He was featured in MIT’s Technology Review as Colombia’s Top Young Innovator of 2012. In 2015, he joined the World Economic Forum’ Young Global Leaders community. In the US, Alexander is an activist that pushes for immigration reform. In Colombia, he works to improve government support for innovation. Alexander is the founder of Neocratia.</div>
                    </div>
                  </v-flex>
                  <v-flex xs6 sm5 md4 text-xs-right>
                    <img src="~/assets/team/alex-bw.png" height="120">
                  </v-flex>
                </v-layout>
                  <div class="text-xs-right">
                    <a href="https://bio.torre.co/torrenegra" target="_blank">LEARN MORE</a>
                  </div>
              </v-container>
            </v-card>
          </v-flex>
          <v-flex xs12>
            <v-card class=" darken-2 mt-4 pa-2">
              <v-container fluid grid-list-md>
                <v-layout row>
                  <v-flex xs6 sm7 md8>
                    <div>
                      <div class="headline">Andrés González</div>
                      <div>Andres is a software developer, entrepreneur and tech enthusiast. Originary from Colombia, he has been in the software industry for more than 10 years leading projects for companies around the world. He is the founder and technical leader of Swapps a software development company based in  Colombia. He is the maintainer of the Neocratium platform.</div>
                    </div>
                  </v-flex>
                  <v-flex xs6 sm5 md4 text-xs-right>
                    <img src="~/assets/team/andres-bw.jpg" height="120">
                  </v-flex>

                </v-layout>
                <div class="text-xs-right">
                  <a href="https://www.linkedin.com/in/andresgz/" target="_blank">LEARN MORE</a>
                </div>
              </v-container>
            </v-card>
          </v-flex>

          <v-flex xs12>
            <v-card class=" darken-2 mt-4 pa-2">
              <v-container fluid grid-list-md>
                <v-layout row>
                  <v-flex xs6 sm7 md8>
                    <div>
                      <div class="headline">Helena Schwertheim</div>
                      <div>Helena is passionate about innovating for a more accountable democracy. Originally from New Zealand, she has a background in political studies, sociology and international relations, having lived and studied in Australia, Colombia, Spain and France, and is now based in Sweden. During the day Helena is a researcher, analysing democratic trends. By night she works with Neocrats to upgrade how laws are made.</div>
                    </div>
                  </v-flex>
                  <v-flex xs6 sm5 md4 text-xs-right>
                    <img src="~/assets/team/helena-bw.jpg" height="120">
                  </v-flex>
                </v-layout>
                <div class="text-xs-right">
                  <a href="https://www.linkedin.com/in/helenaschwertheim/" target="_blank">LEARN MORE</a>
                </div>
              </v-container>
            </v-card>
          </v-flex>

          <v-flex xs12>
            <v-card class=" darken-2 mt-4 pa-2">
              <v-container fluid grid-list-md>
                <v-layout row>
                  <v-flex xs6 sm7 md8>
                    <div>
                      <div class="headline">Rolf Veldman</div>
                        <p>Rolf is a project manager and change manager with a passion for creative writing and 'Learning organizations'. </p>
                        <p>Curiosity is the driving force behind his ambition. This attitude leads Rolf to be creative, assertive and open minded. Fueled by his academic education in political history Rolf has always had a more than average interest in politics. He joined Neocratia in November 2017 and is responsible for Recruitment, Fundraising and Political Advice.</p> 
                    </div>
                  </v-flex>
                  <v-flex xs6 sm5 md4 text-xs-right>
                    <img src="~/assets/team/rolf-bw.jpg" height="120">
                  </v-flex>
                </v-layout>
                <div class="text-xs-right">
                  <a href="https://www.linkedin.com/in/rolfveldman/" target="_blank">LEARN MORE</a>
                </div>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
    </v-card>

    <v-card class="primary white--text footer-card">
      <v-container fluid grid-list-lg>
        <v-layout column align-center justify-center>
          <v-card-title primary-title class="title">
            Spread the word:
          </v-card-title>
          <div class="mb-4 spread-the-word">
            <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.neocratia.org/" target="_blank" class="button">
              <v-btn light class="square">
                <v-icon x-large primary>mdi-facebook</v-icon>
              </v-btn>
            </a>
            <a href="https://api.whatsapp.com/send?text=Let’s upgrade the way our laws are created https%3A//www.neocratia.org/" data-action="share/whatsapp/share" class="button" target="_blank">
              <v-btn light class="square">
                <v-icon x-large primary>mdi-whatsapp</v-icon>
              </v-btn>
            </a>
            <a href="https://twitter.com/home?status=Let’s upgrade the way our laws are created https%3A//www.neocratia.org/" class="button" target="_blank">
              <v-btn light class="square">
                <v-icon x-large primary>mdi-twitter</v-icon>
              </v-btn>
            </a>
          </div>
        </v-layout>
      </v-container>
    </v-card>

  </v-flex>

  <v-dialog v-model="dialog" persistent width="320">
    <v-card>
      <v-card-title>
      </v-card-title>
      <v-card-text class="title text-xs-center">We’ll keep you posted. As soon as there are enough people interested in your area, we'll help you lead or become part of your own local revolution.</v-card-text>
      <v-container fluid grid-list-lg class="primary white--text mt-4">
        <v-layout column align-center justify-center>
          <v-card-title primary-title class="white--text title">
            Spread the word:
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

</v-layout>
</template>

<script>
var firebase = require('firebase');
var vueSmoothScroll = require('vue-smoothscroll');
var axios = require('axios');
// Vue.use(vueSmoothScroll);
const API_URL = process.env.api_url;

export default {
  head () {
    return {
      titleTemplate: 'Our Team | Neocratia'
    }
  },
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
      show_arrows: true
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
    },
    head () {
      return {
        title: this.title,
        meta: [
          { hid: 'ddd', name: 'ddd', content: 'My custom description' }
        ]
      }
    }
  }
}
</script>
