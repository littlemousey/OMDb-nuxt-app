<template>
  <v-app>
    <v-content>
      <div class="headerbar">
        <div class="col"><h1 class="headerbar--title">OMDb Search</h1></div>
        <div class="col">
          <span>Search a movie </span
          ><input
            v-model="movieName"
            class="search-movie"
            type="text"
            @keyup.enter="searchMovie"
          />
          <custom-button :on-click="searchMovie" text="Search"></custom-button>
        </div>
      </div>
      <v-container class="main-wrapper">
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import CustomButton from '@/components/button'
export default {
  components: {
    CustomButton
  },
  data() {
    return {
      movieName: null
    }
  },
  computed: {
    ...mapState(['movieData'])
  },
  methods: {
    async searchMovie() {
      if (this.movieName) {
        await this.$store.dispatch('retrieveMovieData', this.movieName)
        if (this.movieData.Error) {
          this.movieName = this.movieName + ' Not found'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main-wrapper {
  max-width: 1300px;
}
.headerbar {
  display: flex;
  contain: layout;
  background-color: white;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}

.headerbar--title {
  font-weight: 500;
}

.col {
  flex: 1;
  text-align: center;
}

input.search-movie {
  border-bottom: 1px solid lightgrey;
}
</style>
