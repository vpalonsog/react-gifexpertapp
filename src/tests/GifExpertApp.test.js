import React from "react";
import { GifExpertApp } from "../GifExpertApp";

describe("Testing <GifExpertApp /> component", () => {
  test("it should display correctly", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("it should show a category list", () => {
    const categories = ["One Punch", "Dragon Ball"];

    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
