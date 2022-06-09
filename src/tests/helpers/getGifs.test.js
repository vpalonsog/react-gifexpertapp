import getGifs from "../../helpers/getGifs";

describe("Testing getGifs Fetch", () => {
  test("it should bring back  ten (10) elements", async () => {
    const gifs = await getGifs("One Punch");

    expect(gifs.length).toBe(10);
  });
  test("it should bring back an empty array when getGifs is empty", async () => {
    const gifs = await getGifs("");

    expect(gifs.length).toBe(0);
  });
});
