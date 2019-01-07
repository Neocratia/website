<template>
    <v-card class="py-3 px-3">
      <v-layout fill-height justify-center>
        <v-card-title primary-title class="text-xs-center headline">
          {{ $t('team.headline') }}.
        </v-card-title>
      </v-layout>
      <v-layout row wrap mt-4>
        <TeamMember 
        title="Alexander Torrenegra"
        link="https://bio.torre.co/torrenegra"
        >
        <div slot="description">
            {{ $t('team.alexander_torrenegra_description') }}
        </div>
        <img slot="image" src="~/assets/team/alex-bw.png" height="120"> 
        </TeamMember>

        <TeamMember 
        title="Andrés González"
        link="https://www.linkedin.com/in/andresgz/"
        className="mt-4"
        >
        <div slot="description">
            {{ $t('team.andres_gonzalez_description') }}
        </div>
        <img slot="image" src="~/assets/team/andres-bw.jpg" height="120"> 
        </TeamMember>

        <TeamMember 
        title="Helena Schwertheim"
        link="https://www.linkedin.com/in/helenaschwertheim/"
        className="mt-4"
        >
        <div slot="description">
            {{ $t('team.helena_schwertheim_description') }}
            
        </div>
        <img slot="image" src="~/assets/team/helena-bw.jpg" height="120"> 
        </TeamMember>

        <TeamMember 
        title="Nicolás Contreras"
        link="https://torre.bio/ni500"
        className="mt-4"
        >
        <div slot="description">
            {{ $t('team.nicolas_contreras_description') }}
        </div>
        <img slot="image" src="~/assets/team/nicolas-bw.jpg" height="120"> 
        </TeamMember>

        <TeamMember 
        title="Rolf Veldman"
        link="https://www.linkedin.com/in/rolfveldman/"
        className="mt-4"
        >
        <div slot="description" v-html="$t('team.rolf_veldman_description')">
        </div>
        <img slot="image" src="~/assets/team/rolf-bw.jpg" height="120"> 
        </TeamMember>
        </v-layout>
    </v-card>
</template>
<script type="text/javascript">
import TeamMember from '~/components/team-member'

export default {
    components: {
        TeamMember
    }
}
</script>