const FileHandler = require("./Modules/fileHandler");
const MovieProcessor = require("./Modules/movieProcessor");
const RecommendationEngine = require("./Modules/recommendationEngine");
const UserInput = require("./Modules/userInput");

(async () => {
  const fileHandler = new FileHandler();
  const movieData =
    (await fileHandler.readJsonFile("./Data/movieData.json")) || [];

  const movieProcessor = new MovieProcessor(movieData);
  const recommendationEngine = new RecommendationEngine(movieProcessor);
  const userInput = new UserInput();

  // دریافت ورودی‌های کاربر
  const userPreferences = await userInput.getUserPreferences();

  // ذخیره کردن ترجیحات کاربر در فایل
  await fileHandler.writeJsonFile(
    "./Data/userPreferences.json",
    userPreferences
  );

  // ارائه توصیه فیلم‌ها
  const recommendedMovies =
    recommendationEngine.recommendMovies(userPreferences);
  console.log("Recommended Movies:", recommendedMovies);

  userInput.close();
})();
