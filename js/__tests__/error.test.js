import GameSavingLoader from '../gameSavingLoadr';
import read from '../reader';
import json from '../parse';

jest.mock('../reader', () => ({
  __esModule: true, 
  default: jest.fn(),
}));

jest.mock('../parse', () => ({
  __esModule: true, 
  default: jest.fn(),
}));

describe('GameSavingLoader', () => {


  it('should catch and log an error', async () => {
    read.mockRejectedValue(new Error('Read error')); 
    json.mockResolvedValue('{}'); 

    const loader = new GameSavingLoader();

    try {
      await loader.load();
    } catch (error) {
      expect(error).toEqual(new Error('Read error'));
    }

  });
});
