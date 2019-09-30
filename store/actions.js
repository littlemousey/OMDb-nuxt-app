export default {
  async retrieveMovieData(context, movieName) {
    const moviesData = await this.$axios.$get(
      `http://www.omdbapi.com/?s=${movieName}&apikey=16360874`
    )
    context.commit('setMovieData', moviesData)
  }
}
