<template>
  <div>
    <v-alert v-if="!movieData" text dense color="teal" border="left">
      Welcome to OMDB Search, search something in the bar above!
    </v-alert>
    <v-alert v-if="movieData && movieData.Error" text prominent type="error">
      {{ movieData.Error }}
    </v-alert>
    <div v-if="movieData">
      <v-row justify>
        <template v-for="movie of movieData.Search">
          <v-col :key="movie.imdbID" cols="12" sm="6">
            <movieCard
              :id="movie.imdbID"
              class="pa-2"
              :title="movie.Title"
              :poster="movie.Poster"
              :year="movie.Year"
            />
          </v-col>
        </template>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import movieCard from '@/components/movieCard'

export default {
  name: 'Movies',
  components: {
    movieCard
  },
  computed: mapState(['movieData'])
}
</script>

<style lang="scss" scoped></style>
