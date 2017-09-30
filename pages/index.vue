<template>
<v-layout column align-center>
  <v-flex xs12 sm10 md8 lg6 elevation-1 content-area>
    <v-card flat tile class="primary text-xs-center">
      <v-layout fill-height justify-center py-5>
        <v-card-title primary-title class="white--text headline px-5">
          Let's reinvent the way our laws are created.
          <a name="video"></a>
        </v-card-title>
      </v-layout>
    </v-card>
    <v-card flat tile class="secondary text-xs-center" height="55vmin">
      <v-layout fill-height justify-center>
        <v-flex xs12>
          <div class="video-container">
            <iframe src="https://www.youtube.com/embed/qnqz5fpJH0M" frameborder="0" allowfullscreen></iframe>
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
    <a name="join"></a>
    <h2 class="text-xs-center headline mt-5">Join the movement</h2>

    <v-form v-model="valid" ref="form" class="mt-5 px-4 join-form" v-on:submit.prevent="submit">

      <v-checkbox label="Stay Informed" v-model="interest" value="stay-informed"></v-checkbox>
      <v-checkbox label="Lead the movement locally" v-model="interest" value="lead-movement-locally" ></v-checkbox>
      <v-checkbox label="Donate" v-model="interest" value="donate"></v-checkbox>
      <v-text-field label="Your email address" v-model="email" :rules="emailRules"></v-text-field>

      <div class="text-xs-center">
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

    <div class="my-3 mx-3">
      <v-expansion-panel>
        <v-expansion-panel-content ripple>
          <div slot="header">How it works</div>
          <v-card>
            <v-card-text>
          <p>
              At Neocratia, we believe that democracies must be honest, efficient, and corruption-free. To learn how Neocratia achieves that goal, watch this <a href="#video">two-minute video</a>
          </p>

            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content ripple>
          <div slot="header">How initiatives are proposed</div>
          <v-card>
            <v-card-text>
              <p>We believe that all citizens should be able to propose initiatives. When a community uses Neocratia, all people eligible to vote at any given jurisdiction are able to propose initiatives:</p>
              <ol>
                <li>First, initiatives are submitted using an electronic platform.</li>
                <li>They are then debated.</li>
                <li>If a significant number of citizens shows interest in the idea, a law proposal can begin to be drafted.</li>
                <li>The citizen that initially proposed the idea can then invite other citizens to help draft the law proposal. They use an online collaboration tool to do so (similar to Google Docs and Wikipedia). Citizens can also discuss the draft as a whole or different parts of it. A log of changes is kept.</li>
                <li>When the citizen that initially proposed the idea decides it’s time to do so, the law proposal is scheduled for voting.</li>
              </ol>
              <p>To learn more, view how decisions are made.</p>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content ripple>
          <div slot="header">How ideas are debated</div>
          <v-card>
            <v-card-text>
              <p>We are tired of stupid political rhetoric and crave thoughtful debate. Neocratia tries to bring honesty to governments and societies through thoughtful debate.</p>
              <p>With Neocratia, all people eligible to vote in any given jurisdiction can be part of the conversation. Conversations happen online via an electronic platform. Conversation can be centered about a proposal or any other topic relevant to the group. Citizens can upvote or downvote the comments of others. The comments that people have agreed with the most  become more visible by raising to the top of threads. All conversation and comments are transparent. Upvotes and downvotes by individual citizens and public for representatives.</p>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content ripple>
          <div slot="header">How decisions are made</div>
          <v-card>
            <v-card-text><p>We believe that laws and decisions should be made with transparency and not behind closed doors. With Neocratia, decisions are made by voting on laws proposals. Laws can be new or can replace existing laws. Voting happens online via an electronic platform. Law proposals are scheduled for voting with at least 48 hours of head time. Voting lasts for 72 hours. The results are then made public. </p>

            <p>We believe that citizens should be able to vote directly for laws or delegate their vote to others. Because of that, with Neocratia each citizen eligible to vote at any given jurisdiction has three options in relation to a law proposal being voted for:</p>

            <p>A. The citizen can do nothing. If the citizen has chosen one or more representatives and they vote for the law proposal, they will be voting on behalf of the citizen.</p>

            <p>B. The citizen can vote directly for the proposal. If the citizen has chosen one or more representatives and they already voted for the law proposal, the vote of the citizen will override the decision that the representatives had made for her/him.</p>

            <p>C. The citizen can choose one or more representatives to vote on her/his behalf for the law proposal at hand. If the citizen had chosen one or more general-representatives and they already voted for the law proposal, the vote of the representatives chosen for the proposal at hand will override the decision that the general representatives had made for her/him.</p>

            <p>To give control to each citizen, citizens can view how their chosen representatives and the representatives of their representatives have voted for a law proposal while the voting is still happening. To avoid groupthink, the overall voting results are only made public when the voting ends.</p>
        </v-card-text>
        </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content ripple>
          <div slot="header">How representatives are chosen</div>
          <v-card>
            <v-card-text>
              <p>We believe that citizens should be able to vote directly for laws or delegate their vote to others. With Neocratia, each citizen eligible to vote in any given jurisdiction can chose representatives using an electronic platform. When citizens opt not to vote for a law proposal directly, representatives vote or delegate their vote on their behalf. Citizens can chose zero, one, or more representatives. When choosing two or more representatives, the vote delegation is split in equal parts. For example, if a citizen chooses four representatives, each representative will be able to vote or delegate 25% of the vote of the citizen.
              </p>
              <p>Representatives have a voting weight. The voting weight is the sum of all the votes having been delegated to a given representative plus the vote of the representative her/himself. Representatives can also chose their own representatives. When representatives opt not to vote for a law proposal directly, representatives of representatives vote or delegate their vote on their behalf.
              </p>
              <div class="text-center">
                <img src="~/assets/delegation_graph.png" class="img-responsive">
              </div>
              <p>With Neocratia all citizen eligible to vote at any given jurisdiction can opt to allow others to chose them as their representatives. The only requirement is agreeing to making all of her/his votes transparent.</p>
              <p>With Neocratia all citizen eligible to vote at any given jurisdiction can opt to allow others to chose them as their representatives. The only requirement is agreeing to making all of her/his votes transparent.</p>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content ripple>
          <div slot="header">How representatives are scrutinized</div>
          <v-card>
            <v-card-text>We believe that the decisions that affect our everyday lives must never be taken behind closed doors. Thus, the actions and votes of representatives should be visible to others. At Neocratia, representatives have public profiles on an electronic platform. This allows citizens to learn how their representatives have voted in law proposals, in debates what comments representatives have upvoted and downvoted, whether the representatives has chosen representatives of her/his own, and the voting weight.</v-card-text>
          </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content ripple>
          <div slot="header">Neocratia and its electronic platform</div>
          <v-card>
            <v-card-text>
              <p>The values and principles of Neocratia require a reliable and safe electronic platform where thoughtful ideas are debated, votes are cast privately, representatives are scrutinized, and decisions are made with transparency.</p>
              <p>We are currently building one option, Neocratium, and we encourage others to build alternative platforms as well. We can help with advice. Neocratium will allow communities of any size and any type, even non-political ones, to manage their own democracies. Neocratium is an open source platform currently under development. When ready, groups will be able to quickly create a community using the hosted version, or download the source code and install their own instance of Neocratium in their own servers.</p>
              <p>With Neocratia, the settings of the platform for each community are managed by a team of administrators. The platform administrators are appointed by the executive branch of the government of each community, similarly to how the offices and boards of elections are appointed in most democracies. Each citizen has an account. The account is provided and/or approved by the platform administrators. In the case of the Neocratium, it can be customized to offer single-sign-on integration with existing electronics IDs already offered by multiple governments.</p>
              <p>If you are interested on helping create Neocratium by volunteering, contact <a href="mailto:neocratium@neocratia.org">neocratium@neocratia.org</a></p>
              <p>If you are considering building or adapting a platform based on the values and principles of Neocratia, we can help. Contact <a href="mailto:torrenegra@neocratia.org">torrenegra@neocratia.org</a>.</p>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content ripple>
          <div slot="header">Our roadmap</div>
          <v-card>
            <v-card-text>
            <p>Our roadmap is simple, yet ambitious. In summary:</p>
            <ol>
              <li>First, we are identifying several communities all over the world ripe for launching a successful campaign to get enough seats in their local legislative body.</li>
              <li>Once elected, upgrade the legislative body with a technology platform where initiatives are proposed, thoughtful ideas are debated, votes are cast privately, representatives are scrutinized, and decisions are made with transparency.</li>
              <li>Once Neocratia has been proven to work in a few communities, it can be applied globally to as many communities as possible.</li>

            </ol>
            <p>This is the roadmap for each community:</p>
            <ol>
              <li>First, members of a community pledge their vote to elect proxy representatives in their traditional elections.</li>
              <li>If enough pledges are reached, they are expected to vote for the proxy candidates.</li>
              <li>On election day, all people that pledged their vote cast their ballot for the proxy candidates.</li>
              <li>Once elected, the proxy representatives pass the laws required that upgrade the legislative body with a technology platform where initiatives are proposed, thoughtful ideas are debated, votes are cast privately, representatives are scrutinized, and decisions are made with transparency. If not enough proxy representatives are elected to pass the laws required to upgrade the legislative body, the ones that got elected will then act as proxy representatives until the following election cycle. Proxy representatives act as intermediaries between the group that elected them and the public office that they were elected to. They act based on the decisions made by the group using Neocratium. Proxy representatives don’t have an opinion of their own. They are accountable as their reputation is on the line. If a proxy representative is failing at their job, and depending on the government’s legislation, the group that elected him/her may be able to impeach them.</li>
            </ol>
            <p>Leave us your phone or email. As soon as there are enough people interested in your area, we'll help you lead or become part of your own local movement.</p>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content ripple>
          <div slot="header">Origins of Neocratia</div>
          <v-card>
            <v-card-text>
            To learn about the origins of Neocratia, check out this <a href="https://medium.com/democrracy-blog/if-democracy-were-to-be-invented-today-what-would-it-look-like-8cdb9324ad4d" target="_blank">blog post</a>.
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content ripple>
          <div slot="header">How Neocratia is funded</div>
          <v-card>
            <v-card-text>
            <p>Neocratia is a non-profit effort that depends on the donations of individuals like you. We are tired of big money and corporations influencing politics. Because of that, at Neocratia we only receive donations from individuals. An even then, we limit the size of the donations to avoid depending to much on one single person. You can donate as little as $1 per month through Patreon or Open Collective. </p>
            <p>50% of your donation goes towards supporting your local movement. The other 50% goes towards bring Neocratia to all communities on Earth.</p>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content ripple>
          <div slot="header">Our values</div>
          <v-card>
            <v-card-text>
            <ul>
              <li>Honesty</li>
              <li>Transparency</li>
              <li>Mutual understanding</li>
              <li>Accountability</li>
              <li>Connectedness</li>
            </ul>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content ripple>
          <div slot="header">How Neocratia is structured</div>
          <v-card>
            <v-card-text>
            <p>Neocratia is both a global movement with autonomous local chapters. Locally, Neocratia can take different legal structures depending on local laws and the requirements to receive donations and have candidates elected to public office. It may be an NGO, a political party, or a movement that doesn’t have a legal structure.</p>
            <p>Globally, Neocratia is governed by a board of directors that elects an executive director.</p>
              <strong>Project leader</strong>
              <br>
              <strong>Alexander Torrenegra</strong>
              <br>
              Responsible for:
              <ul>
                <li>Pursuing the vision.</li>
                <li>Making major decisions.</li>
                <li>Obtaining the resources required to execute the vision.</li>
                <li>Managing the overall operations and resources of the project.</li>
                <li>Be the spokesperson for the project.</li>
                <li>Be the tiebreaker for initiatives of the board of directors that end in a voting tie.</li>
              </ul>
              <p></p>
              <strong>Board of directors</strong>
              <p>Responsible for:</p>
              <ul>
                <li>Determining the vision of the project.</li>
                <li>Electing the project leader.</li>
                <li>Determining who can be a member of the board.</li>
                <li>Determining the voting weight for each member of the board.</li>
              </ul>
              <p>Eligibility for being a member of the board:</p>
              <ul>
                <li>Elected by the majority vote by the board of directors.</li>
              </ul>
              <p>Voting weight for each director:</p>
              <ul>
                <li>Each director will earn one vote for each hour of volunteering work after approval by the rest of the board of a directors.</li>
                <li>Each director will lose 50% of their votes after 90 days of not getting new votes via rule #1 above.</li>
                <li>Each director will lose 100% of their votes and their status as member of the board after 365 days of not getting new votes via rule #1 above.</li>
              </ul>
              <strong>Volunteers</strong>
              <p>Responsible for:</p>
              <ul>
                <li>Following the directives of the project leader.</li>
              </ul>
              <p>Eligibility:</p>
              <ul>
                <li>Everyone.</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content ripple>
          <div slot="header">How to stay informed</div>
          <v-card>
            <v-card-text>
            To stay informed, <a href="#join">click here</a>.
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content ripple>
          <div slot="header">How to volunteer</div>
          <v-card>
            <v-card-text>
            To volunteer, <a href="#join">click here</a>.
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content ripple>
          <div slot="header">Press inquiries</div>
          <v-card>
            <v-card-text>
            For press inquiries, contact <a href="mailto:press@neocratia.org">press@neocratia.org</a>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </div>

    <v-card class="primary white--text mt-4 footer-card">
      <v-container fluid grid-list-lg>
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
    </v-card>

  </v-flex>

  <v-dialog v-model="dialog" persistent>
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
      interest: ['stay-informed']
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
        this._data.dialog =true;
        this.$refs.form.reset()
      }

    },
    clear() {
      this.$refs.form.reset()
    },
    checkboxChange(element){
      console.log(element);
      // if(element.length == 0){
      this.$refs.form.validate()
      // }
    }
  }

}
</script>
