<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 md6>
        <h2 class="text-xs-center display-1">Join the movement</h2>
        {{ interest }}
        {{ email }}
        <form v-on:submit.prevent>
          
        <v-radio class="pt-0 pb-0 title" title label="Stay informed" v-model="interest" value="stay-informed" color="primary"></v-radio>
        <v-radio class="pt-0 pb-0 title" label="Lead the movement locally" v-model="interest" value="lead-the-movement-locally" color="primary"></v-radio>
        <v-radio class="pt-0 pb-0 title" label="Donate" v-model="interest" value="donate" color="primary"></v-radio>

        <v-text-field
          name="email"
          label="Your email address"
          id="input-email"
          v-model="email"
        ></v-text-field>

        <div class="text-xs-right">
          <v-btn primary dark large primary v-on:click="processData">JOIN</v-btn>
        </div>

        </form>
      
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  var firebase = require('firebase');
  export default {
    data () {
      return {
        interest: null,
        email: null
      }
    },
    methods: {
      processData(event){
        console.log(this._data.interest);
        console.log(this._data.email);

        var interest = this._data.interest;
        var email = this._data.email;
        var timestamp = Number(new Date());

        firebase.database().ref('contacts/' + timestamp).set({
            interest: interest,
            email: email
        });


        return false;
      }
    }
  }
</script>
