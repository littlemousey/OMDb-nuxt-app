<template>
  <v-app>
    <v-content>
      <v-toolbar>
        <v-toolbar-title>OMDB Search</v-toolbar-title>

        <div class="flex-grow-1"></div>

        <v-toolbar-items>
          <v-text-field
            v-model="movieName"
            :suffix="movieData && movieData.Error ? 'not found!' : null"
            label="Search a movie"
          ></v-text-field>
        </v-toolbar-items>
        <v-btn color="primary" @click="searchMovie">Search</v-btn>
      </v-toolbar>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      movieName: null
    }
  },
  computed: {
    ...mapState(['movieData'])
  },
  methods: {
    searchMovie() {
      if (this.movieName) {
        this.$store.dispatch('retrieveMovieData', this.movieName)
      }
    }
  }
}
</script>
