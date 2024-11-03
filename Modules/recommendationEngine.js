class RecommendationEngine {
  constructor(movieProcessor) {
    this.movieProcessor = movieProcessor;
  }

  recommendMovies(preferences) {
    const recommendedMovies = this.movieProcessor.movies.filter(
      (movie) =>
        movie.genre.includes(preferences.genre) &&
        movie.rating >= preferences.minRating &&
        movie.year >= preferences.yearRange.start &&
        movie.year <= preferences.yearRange.end
    );

    return recommendedMovies.length
      ? recommendedMovies
      : "No movies match your preferences.";
  }
}

module.exports = RecommendationEngine;
