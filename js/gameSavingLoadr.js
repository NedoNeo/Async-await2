import json from "./parse";
import read from "./reader";
export default class GameSavingLoader {
    async load () {
        try {
            const result = await read();
            return JSON.parse(await json(result));
        } catch (error) {
            console.log(error);
        }
}
}
  