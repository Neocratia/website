<template>
<v-layout column align-center>
  <v-flex xs12 sm10 md8 lg6 elevation-1 content-area>
    <v-card flat tile class="secondary text-xs-center">
      <v-layout fill-height justify-center>
        <v-flex xs12>
          <!--<div class="video-container">
            <iframe src="https://www.youtube.com/embed/qnqz5fpJH0M" frameborder="0" allowfullscreen></iframe>
          </div> -->
        <v-parallax src="/img/neocratia-main-reduced.jpg" height="590" class="scrim main-image">
          <v-layout row wrap justify-center align-center>
            <v-flex class="xs6"></v-flex>
            <v-flex class="xs6">
            <h3 class="white--text">Let’s upgrade the way our laws are created</h3>
            </v-flex>
          </v-layout>
        </v-parallax>
        </v-flex>
      </v-layout>
    </v-card>

    <v-card class="primary white--text py-5">
      <p class="subheading text-xs-center px-3">
        We are tired of corruption, big money influencing our laws, and stupid political discourse.
        Democracy must be honest and efficient, but the system is broken.<br/><br/>
        Neocratia’s goal is to upgrade the way our laws are created.

      </p>
    </v-card>

    <v-card class="">
 <v-carousel hide-controls>
        <v-carousel-item src="">
          <v-container fluid grid-list-lg>
            <v-layout row align-center px-5>
              <v-flex xs3 lg2>
                <v-avatar size="100%"><img src="/img/juanjose.jpg" /></v-avatar>
              </v-flex>
              <v-flex xs9 lg10>
                <div class="subheading">
                  “I’m tired of widespread corruption governing our societies. I believe it’s about time that we do something about it.”
                </div>
                <div class="body-2 text-xs-right mt-2">Juan José Roesel, Volunteer</div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-carousel-item>
        <v-carousel-item src="">
          <v-container fluid grid-list-lg>
            <v-layout row align-center px-5>
              <v-flex xs3 lg2>
                <v-avatar size="100%"><img src="/img/torrenegra.jpg" /></v-avatar>
              </v-flex>
              <v-flex xs9 lg10>
                <div class="subheading">
                  “'If democracy were to be invented today, what would it be like?' Neocratia is the answer.”
                </div>
                <div class="body-2 text-xs-right mt-2">Alexander Torrenegra, Volunteer</div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-carousel-item>
        <v-carousel-item src="">
          <v-container fluid grid-list-lg>
            <v-layout row align-center px-5>
              <v-flex xs3 lg2>
                <v-avatar size="100%"><img src="/img/helena.jpg" /></v-avatar>
              </v-flex>
              <v-flex xs9 lg10>
                <div class="subheading">
                  “Neocratia can bring honesty to governments and societies through thoughtful debate.”
                </div>
                <div class="body-2 text-xs-right mt-2">Helena Schwertheim, Volunteer</div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-carousel-item>
      </v-carousel>
    <a name="join"></a>
    </v-card>
    <v-card class="primary white--text pb-5">
      <h2 class="text-xs-center headline py-5"  v-if="show_form">Choose one or more:</h2>
      <p class="text-xs-center pt-5" v-if="!show_form">We have received your information. Thanks for your interest!</p>
      <v-form v-model="valid" ref="form" class=" px-4 join-form white--text" v-on:submit.prevent="submit" v-if="show_form">

        <v-checkbox label="Stay Informed" v-model="interest" value="stay-informed"></v-checkbox>
        <v-checkbox label="Learn when Neocratia gets to your area" v-model="interest" value="learn"></v-checkbox>
        <v-checkbox label="Lead your local movement" v-model="interest" value="lead-movement-locally"></v-checkbox>
        <v-checkbox label="Contribute to the open source platform" v-model="interest" value="contribute-open-source"></v-checkbox>
        <v-checkbox label="Donate" v-model="interest" value="donate"></v-checkbox>
        <v-text-field label="Your email address" v-model="email" :rules="emailRules"></v-text-field>

        <div class="text-xs-center">
          <v-btn @click="submit" large type="submit" class="primary--text">JOIN</v-btn>
        </div>
      </v-form>
    </v-card>
    <v-card class="py-3 px-3">
      <v-layout fill-height justify-center>
        <v-card-title primary-title class="text-xs-center headline">
          Learn more:
        </v-card-title>
      </v-layout>
      <v-expansion-panel class="mb-3">
        <v-expansion-panel-content ripple>
          <div slot="header">The origins of Neocratia</div>
          <v-card>
            <v-card-text class="grey lighten-4">
              <p name="211c" id="211c" class="graf graf--p graf-after--h3">Neocratia started when a bunch of us got together and asked ourselves:</p>
              <p>
                <strong>“If democracy were to be invented today, what would it be&nbsp;like?”</strong>
              </p>
              <p name="9f2e" id="9f2e" class="graf graf--p graf-after--pullquote">We looked for the advice of thought leaders in several sectors. We conducted hundreds of brainstorm sessions on the topic.</p>
              <p name="5a09" id="5a09" class="graf graf--p graf-after--p">Simultaneously, we started coding nights and weekends developing the software required to prototype some of the best ideas.</p>
              <p name="d716" id="d716" class="graf graf--p graf-after--p">After two years of learning and experimenting, we identified the most promising ideas and combined them in this manifesto.</p>
              <p>
                <strong>We call it Neocratia and our mission is to upgrade the way our laws are created and societies govern themselves.</strong>
              </p>
              <p name="a1ea" id="a1ea" class="graf graf--p graf-after--pullquote">Today more than ever, ordinary citizens need to get involved; they need to stand up and be counted; they need to rally for change in the mechanics of government. Those of us who can, need to raise our voices for the voiceless and do something on behalf of the powerless.</p>
              <p name="98d6" id="98d6" class="graf graf--p graf-after--p">We at Neocratia are activists who remain committed to establishing true democracy. Like casting a pebble into a pond, we believe that in time, the ripple we start will reach the furthest shore.</p>
              <p name="917f" id="917f" class="graf graf--p graf-after--p graf--trailing">Neocratia can succeed in many ways: it can enable the creation and improvement of thousands of democracies, big and small, become the legislative branch of existing democracies, make democracy part of our daily lives, enable introverts to become political leaders, and more. We expect, at least, to inspire others to improve the government of the people, by the people, for the people.</p>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content ripple>
          <div slot="header">The proposal process</div>
          <v-card>
            <v-card-text class="grey lighten-4">
              <p name="a80a" id="a80a" class="graf graf--p graf-after--h3">In a Neocratic community, all people eligible to vote for proposed initiatives will be able to do so.</p>
              <ol class="postList">
                  <li name="0df6" id="0df6" class="graf graf--li graf-after--p">Initiatives are submitted using an electronic platform;</li>
                  <li name="824c" id="824c" class="graf graf--li graf-after--li">They are publicly debated by the community;</li>
                  <li name="2755" id="2755" class="graf graf--li graf-after--li">Should a significant number of citizens show interest in a particular initiative, the drawing up of a draft law is initiated;</li>
                  <li name="b8e4" id="b8e4" class="graf graf--li graf-after--li">The citizen who initially proposed the initiative may invite others to help draft the law proposal. An online collaboration tool is used (similar to Google Docs, Wikipedia, or Git) Citizens may also discuss the draft as a whole or different parts of it. A log of changes is kept;</li>
                  <li name="993d" id="993d" class="graf graf--li graf-after--li">When the citizen who initially proposed the initiative decides the drafting process is complete, the law proposal is scheduled for voting.</li>
              </ol>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content ripple>
          <div slot="header">Debating initiatives or ideas</div>
          <v-card>
            <v-card-text class="grey lighten-4">
              <p name="ea1c" id="ea1c" class="graf graf--p graf-after--h3">Within a Neocratic community:</p>
              <ul class="postList">
                  <li name="46f8" id="46f8" class="graf graf--li graf-after--p">All people eligible to vote in any given jurisdiction may participate.</li>
                  <li name="4e5e" id="4e5e" class="graf graf--li graf-after--li">Conversations happen online via an electronic platform.</li>
                  <li name="e217" id="e217" class="graf graf--li graf-after--li">Conversations could be centered about a proposal or any other topic relevant to the group.</li>
                  <li name="a963" id="a963" class="graf graf--li graf-after--li">Citizens are able to upvote or downvote the comments of others.</li>
                  <li name="18ee" id="18ee" class="graf graf--li graf-after--li">Comments that people agree with the most become more visible by rising to the top of threads.</li>
                  <li name="be5f" id="be5f" class="graf graf--li graf-after--li">Conversations and comments are transparent. Upvotes and downvotes by representatives are public; those by individual citizens are private.</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content ripple>
          <div slot="header">Making decisions</div>
          <v-card>
            <v-card-text class="grey lighten-4">
              <p name="e798" id="e798" class="graf graf--p graf-after--h3">Neocratic communities make decisions by voting on law proposals. These can be new or replace existing laws. Voting happens online via an electronic platform. Law proposals are publicly scheduled for voting. Voting lasts for a few days, and the results then made public.</p>
              <p name="5a17" id="5a17" class="graf graf--p graf-after--p">We believe citizens should be able to vote for laws directly or delegate their votes to others. Each citizen eligible to vote within a jurisdiction has three voting options.</p>
              <ul class="postList">
                  <li name="9912" id="9912" class="graf graf--li graf-after--p">The citizen can do nothing. If the citizen has chosen one or more representatives, the representatives vote on behalf of the citizen. If the citizen does not have a representative, or their representative(s) do not vote, they will abstain from the vote.</li>
                  <li name="b8b9" id="b8b9" class="graf graf--li graf-after--li">The citizen may choose one or more one-time representatives to vote on their behalf. If the citizen had chosen one or more representatives who had already voted for the law proposal, the vote of the one-time representatives will override the decision of the general representatives. Citizens may change representatives up until voting closes.</li>
                  <li name="8756" id="8756" class="graf graf--li graf-after--li">The citizen can vote directly for the proposal, thereby overriding the decision made by the representatives on their behalf.</li>
              </ul>
              <p name="95f7" id="95f7" class="graf graf--p graf-after--li">Each citizen is given control by being able to view how their chosen representatives, and the representatives of their representatives, voted for a law proposal while the voting is still in progress. To avoid groupthink, the overall voting results are only made public when the voting ends.</p>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content ripple>
          <div slot="header">Choosing representatives</div>
          <v-card>
            <v-card-text class="grey lighten-4">
              <p>Citizens eligible to vote within any Neocratic jurisdiction may choose representatives using an electronic platform. When citizens don’t vote for a law proposal directly, representatives vote on their behalf. Representatives, in turn, can delegate their vote, and those delegated to them, to other representatives. When choosing two or more representatives, the vote delegation will be split into equal parts. Thus, if a citizen chooses four representatives, each representative will be able to vote (or delegate) 25% of the citizen’s vote.</p>
              <img src="~/assets/delegation_graph-min.png" class="img-responsive">
              <p name="a765" id="a765" class="graf graf--p graf-after--figure">Representatives have a voting weight. This is the sum of all votes delegated to a representative plus the representative’s own vote. Representatives may also choose their own representatives and delegate all their voting weight.</p>
              <p name="20ec" id="20ec" class="graf graf--p graf-after--p">In a Neocratic community, all citizens may allow others to choose them as representatives. The only requirements are their agreeing to making all votes transparent and visible to others and volunteering their work. Similarly to how volunteers have created Wikipedia and made it broader, fairer, and more accurate than previous encyclopedias created by paid editors, we believe that many volunteer representatives will perform a better job than a few paid, income-dependent politicians.</p>
              <p name="8aef" id="8aef" class="graf graf--p graf-after--p">Neocratia citizens are able to choose the representatives they want at any time and change them should they no longer feel duly represented.</p>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content ripple>
          <div slot="header">Scrutinizing representatives</div>
          <v-card>
            <v-card-text class="grey lighten-4">
              Representatives in Neocratic communities have public profiles on an electronic platform. This allows citizens to determine how their representatives voted for law proposals, which comments were upvoted and downvoted by their representatives during debates, whether the representatives chose their own representatives, as well as their voting weights.
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content ripple>
          <div slot="header">Neocratia and its electronic platform</div>
          <v-card>
            <v-card-text class="grey lighten-4">
              <p name="9c8f" id="9c8f" class="graf graf--p graf-after--h3">Neocratia’s values and principles require a reliable and secure electronic platform.</p>
              <p name="30c1" id="30c1" class="graf graf--p graf-after--p">We are currently building an open source platform called Neocratium, and we encourage others to build alternatives. (We'll gladly advise.) Neocratium will allow communities of any size and type — even non-political ones — to manage their democracies. Once Neocratium is ready, groups can create communities using the hosted version, or download the source code and install their own on a server.</p>
              <p name="ae80" id="ae80" class="graf graf--p graf-after--p">When a community uses Neocratium, the settings of the platform will be managed by a team of administrators. The platform administrators will be appointed by the executive branch of the government of each community (following procedures similar to current democratic convention). Each citizen will have an account provided and/or approved by the administrators. Neocratium will offer single sign-on integration with existing electronic IDs already offered by numerous governments.</p>
              <p name="eac4" id="eac4" class="graf graf--p graf-after--p">Neocratia will be working with electoral management bodies (EMBs) and other NGOs to guarantee that Neocratium and the other electronic platforms work towards preventing, recording, and reporting potential electoral fraud.</p>
              <p name="c7ce" id="c7ce" class="graf graf--p graf-after--p">If you are interested in helping to create Neocratium as a volunteer, please contact neocratium@neocratia.org.</p>
              <p name="4b61" id="4b61" class="graf graf--p graf-after--p graf--trailing">If you are considering building or adapting a platform based on the values and principles of Neocratia, we can help. Contact build@neocratia.org.</p>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content ripple>
          <div slot="header">Our plan of action</div>
          <v-card>
            <v-card-text class="grey lighten-4">
              <p name="05ab" id="05ab" class="graf graf--p graf-after--h3">In summary:</p>
              <ol class="postList">
                  <li name="8cbf" id="8cbf" class="graf graf--li graf-after--p">We aim to identify several communities around the world that are ripe for launching a successful campaign to get enough seats in their local legislative body;</li>
                  <li name="c6ea" id="c6ea" class="graf graf--li graf-after--li">Once elected, they upgrade the legislative body with a technology platform (Neocratium or an alternative one) where initiatives are proposed, initiatives debated, and votes cast privately. Representatives are constantly scrutinized, and decisions made with transparency;</li>
                  <li name="153f" id="153f" class="graf graf--li graf-after--li">Once Neocratia has been shown to work in a few communities, we aim to make as many communities as we can around the world Neocratic.</li>
              </ol>
              <p name="301f" id="301f" class="graf graf--p graf-after--li">The roadmap for each community:</p>
              <ol class="postList">
                  <li name="c03d" id="c03d" class="graf graf--li graf-after--p">Members of a community pledge to elect Neocratia representatives in their traditional elections;</li>
                  <li name="c85c" id="c85c" class="graf graf--li graf-after--li">If required, the local movement completes the paperwork to elect representatives to public office — such as registering a political party, collecting signatures, etc.;</li>
                  <li name="2be8" id="2be8" class="graf graf--li graf-after--li">Should enough pledges be made, the pledgers vote for Neocratia candidates when elections take place;</li>
                  <li name="a2c7" id="a2c7" class="graf graf--li graf-after--li">Once elected, Neocratia representatives pass the laws needed to upgrade the legislative body with a technology platform (Neocratium or an alternative one).</li>
              </ol>
              <p name="aed1" id="aed1" class="graf graf--p graf-after--li">Should an insufficient number of Neocratia representatives be elected to pass the legislation required to upgrade the legislative body, those representatives will act as proxies until the following election cycle.</p>
              <p name="21c9" id="21c9" class="graf graf--p graf-after--p">Proxy representatives act as intermediaries between the group who elected them and the public office they are elected to. Their actions are circumscribed by the decisions of the group using Neocratium.</p>
              <p name="517b" id="517b" class="graf graf--p graf-after--p">Proxy representatives won't have an opinion of their own. They will be accountable as their reputation will be on the line. If a proxy representative fails at their job, and depending on the government’s legislation, the group that elected him/her may be able to impeach them.</p>
              <p>
                <strong >Would you like to know more? <a href="#join" rel="nofollow" >Click here and send us your email address</a>. As soon as enough people in your area are interested, we’ll help you lead or become a member of your own local movement.</strong>
              </p>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>

        <v-expansion-panel-content ripple>
          <div slot="header">Neocratia funding</div>
          <v-card>
            <v-card-text class="grey lighten-4">
              Neocratia is a non-profit effort that depends on donations from people like you. We’re tired of big money and corporations influencing politics. Because of that, Neocratia will only accept donations from individuals. Even then, we’ll limit the amount to avoid depending too much on a single person.
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>

        <v-expansion-panel-content ripple>
          <div slot="header">How Neocratia is structured</div>
          <v-card>
            <v-card-text class="grey lighten-4">
              <p name="769c" id="769c" class="graf graf--p graf-after--h3">Neocratia is a global movement that will have autonomous local chapters. Locally, Neocratia will take different legal structures depending on local laws and the requirements to receive donations and have candidates elected to public office. It may be an NGO, a political party, or a movement that doesn’t have a legal structure.</p>
              <p name="4584" id="4584" class="graf graf--p graf-after--p">Globally, Neocratia will be governed by a board of directors that elects an executive director.</p>
             </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
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
      show_form: true
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
      }

    },
    clear() {
      this.$refs.form.reset()
    },
    checkboxChange(element) {
      console.log(element);
      // if(element.length == 0){
      this.$refs.form.validate()
      // }
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
