import React from "react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Testing <GifGrid /> component", () => {
  const category = "category";
  const wrapper = shallow(<GifGrid category={category} />);

  test("it should display correctly", () => {
    useFetchGifs.mockReturn({
      data: [],
      loading: true,
    });

    expect(wrapper).toMatchSnapshot();
  });

  test("it should show items when the images is loaded with useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        url: "https://localhost/whatever/thing.jpg",
        title: "category",
      },
    ];

    useFetchGifs.mockReturn({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
