
import GameSavingLoader from "./gameSavingLoadr";

let game = new GameSavingLoader();

(async () => {
  try {
    await game.load();
  } catch (error) {
    console.log(error);
  }
})();
