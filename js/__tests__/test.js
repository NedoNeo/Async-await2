
import GameSavingLoader from "../gameSavingLoadr";
import {read} from "../reader";

jest.setTimeout(15000);

test("GameSavingLoader", async () => {
  const gameSavingLoader = new GameSavingLoader();
  await gameSavingLoader.load().then((res) => {
    console.log(res);
    expect(res).toEqual({
      "id": 9,
      "created": 1546300800,
      "userInfo": {
        "id": 1,
        "name": "Hitman",
        "level": 10,
        "points": 2000
      }
    });
    
  });
});

// jest.mock('../reader', () => ({
//   read: jest.fn(),
//   json: jest.fn(),
// }));

// describe('GameSavingLoader', () => {
//   beforeAll(() => {
//     jest.spyOn(console, 'log').mockImplementation(() => {}); // Mock console.log
//   });

//   afterAll(() => {
//     console.log.mockRestore(); // Restore console.log
//   });

//   it('should catch and log an error', async () => {
//     read.mockRejectedValue(new Error('Read error'));
//     const loader = new GameSavingLoader();

//     console.log(loader.load())

//     try {
//       await loader.load();
//     } catch (error) {
//       expect(error).toEqual(new Error('Read error'));
//     }

//     expect(console.log).toHaveBeenCalledWith(new Error('Read error'));
//   });
// });


// test("GameSavingLoader2", async () => {
//   const errorMessage = "error";
//   const loader = new GameSavingLoader();
// await expect(loader.load()).reject.toThrowError(errorMessage);
// });


