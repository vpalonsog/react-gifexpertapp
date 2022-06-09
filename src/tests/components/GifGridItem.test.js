import React from "react";
import { GifGridItem } from "../components/GifGridItem";

describe("Testing GrifGridItem component", () => {
  const title = "a title";

  const url = "https://localhost/something.jpg";

  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("it should render de component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should have a parragraph with title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("it should have the same image equal to props url and alt", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("it should have animate__headShake", () => {
    const div = wrapper.find("div");
    const className = div.prop("className");
    expect(className.includes("animate_headShake")).toBe(true);
  });
});
