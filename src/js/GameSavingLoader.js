import GameSaving from './GameSaving';
import json from './parsesTheData';
import read from './loadsData';

export default class GameSavingLoader {
  static load() {
    return new Promise(
      (resolve, reject) => read()
        .then((data) => json(data))
        .then((jsonStr) => resolve(new GameSaving(jsonStr)))
        .catch((err) => reject(err)),
    );
  }
}
