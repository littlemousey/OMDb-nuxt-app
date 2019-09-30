<template>
  <v-card>
    <v-img contain height="350px" :src="poster"> </v-img>
    <v-card-title>{{ title }}</v-card-title>

    <template v-if="movieDetails">
      <v-card-text class="black--text">
        <div>Plot</div>
        <div>{{ movieDetails.Plot }}</div>
      </v-card-text>
      <v-card-text class="black--text">
        <div>Actors</div>
        <div>{{ movieDetails.Actors }}</div>
      </v-card-text>
      <v-card-text class="black--text"> Ratings:</v-card-text>
      <ul id="example-1">
        <li v-for="rating in movieDetails.Ratings" :key="rating.source">
          {{ rating.Source }} : {{ rating.Value }}
        </li>
      </ul>
    </template>
    <v-divider class="mx-4"></v-divider>
    <v-card-actions>
      <v-card-text>{{ year }}</v-card-text>
      <v-btn
        v-if="!movieDetails"
        color="primary"
        depressed
        @click="getMovieDetails"
        >Details</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    title: {
      type: String,
      required: true
    },
    poster: {
      type: String,
      required: true
    },
    year: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      movieDetails: null
    }
  },
  methods: {
    async getMovieDetails() {
      this.movieDetails = await this.$axios.$get(
        `http://www.omdbapi.com/?i=${this.id}&apikey=16360874`
      )
    }
  }
}
</script>

<style lang="scss" scoped></style>
