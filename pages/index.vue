<template>
  <div>
    <alert
      v-if="!movieData"
      class="alert--default"
      text="Welcome to OMDB Search, search something in the bar above!"
    ></alert>
    <alert
      v-if="movieData && movieData.Error"
      class="alert--warning"
      :text="movieData.Error"
    ></alert>
    <div v-if="movieData">
      <v-row>
        <template v-for="movie of movieData.Search">
          <v-col
            :key="movie.imdbID"
            cols="12"
            sm="12"
            :md="fullScreenCard === movie.imdbID ? '12' : '6'"
          >
            <movieCard
              :id="movie.imdbID"
              :title="movie.Title"
              :poster="movie.Poster"
              :year="movie.Year"
              @passMoviecardID="setMoviecardID"
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
import alert from '@/components/alert'

export default {
  name: 'Movies',
  components: {
    movieCard,
    alert
  },
  data() {
    return {
      fullScreenCard: null
    }
  },
  computed: mapState(['movieData']),
  methods: {
    setMoviecardID(id) {
      this.fullScreenCard = id
    }
  }
}
</script>

<style lang="scss" scoped></style>
