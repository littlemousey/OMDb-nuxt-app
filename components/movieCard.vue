<template>
  <div class="moviecard">
    <div class="moviecard--image"><img :src="poster" :alt="title" /></div>

    <div class="moviecard--content">
      <p class="moviecard--title">{{ title }}</p>
      <div class="moviecard--details">
        <div v-if="movieDetails">
          <p>Plot</p>
          <p>{{ movieDetails.Plot }}</p>
          <p>Actors</p>
          <p>{{ movieDetails.Actors }}</p>
          <ul>
            <li v-for="rating in movieDetails.Ratings" :key="rating.source">
              {{ rating.Source }} : {{ rating.Value }}
            </li>
          </ul>
        </div>
      </div>
      <div class="moviecard--footer">
        <div class="moviecard--footer--year">
          <span> {{ year }} </span>
        </div>

        <div class="moviecard--footer--button">
          <div v-if="!movieDetails" class="moviecard--button">
            <custom-button
              :on-click="getMovieDetails"
              text="Details"
            ></custom-button>
          </div>
          <div v-if="movieDetails" class="moviecard--button">
            <custom-button
              :on-click="removeMovieDetails"
              text="Hide details"
            ></custom-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from '@/components/button'
export default {
  name: 'MovieCard',
  components: {
    CustomButton
  },
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
        `https://www.omdbapi.com/?i=${this.id}&apikey=16360874`
      )
      this.updateUIDataForParent(this.id)
    },
    removeMovieDetails() {
      this.movieDetails = null
      this.updateUIDataForParent(null)
    },
    updateUIDataForParent(id) {
      this.$emit('passMoviecardID', id)
    }
  }
}
</script>

<style lang="scss" scoped>
.moviecard {
  display: flex;
  height: 100%;
  background-color: white;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.moviecard--image {
  display: flex;
  flex-basis: 45%;

  img {
    width: 100%;
  }
}

.moviecard--content {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
}

.moviecard--title {
  padding: 10px;
  width: 100%;
  flex: 1;
}

.moviecard--button {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.moviecard--details {
  display: flex;
  width: 100%;
  padding: 5px 10px;
  flex-wrap: wrap;
  flex: 10;
}

.moviecard--divider {
  border-top: 1px solid lightgrey;
  width: 100%;
}

.moviecard--footer {
  border-top: 1px solid lightgrey;
  flex-shrink: 0;
  width: 100%;
  flex: 1;
  flex-wrap: wrap;
  display: flex;
  padding: 15px;

  span {
    padding-left: 10px;
  }

  .moviecard--footer--year {
    flex: 1;
    color: lightgrey;
  }

  .moviecard--footer--button {
    flex: 1;
  }
}
</style>
