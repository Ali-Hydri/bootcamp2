class MovieProcessor {
  constructor(movieData) {
    this.movies = movieData;
  }

  // متدی برای نمایش همه فیلم‌ها
  listMovies() {
    return this.movies;
  }

  // متدی برای پیدا کردن فیلم بر اساس ژانر یا دیگر ویژگی‌ها
  findMoviesByGenre(genre) {
    return this.movies.filter((movie) => movie.genre.includes(genre));
  }

  // متدی برای اضافه کردن فیلم جدید
  addMovie(movie) {
    this.movies.push(movie);
  }
}

module.exports = MovieProcessor;
