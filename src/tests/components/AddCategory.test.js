import React from "react";
import "@testing-library/jest-dom";
import { AddCategory } from "../../components/AddCategory";

describe("Testing <AddCategory /> component", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });
  test("it should display correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("it should change the text box", () => {
    const input = wrapper.find("input");
    const value = "Hola Mundo";
    input.simulate("change", { target: { value } });

    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test("it shouldn't post the information with submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test("it should call setCategories function and clean the text box", () => {
    const value = "Hello cruel world";

    //1. Simulate inputChange
    wrapper.find("input").simulate("change", { target: { value } });

    //2. Simulate submit
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    //3. setCategories must be call
    expect(setCategories).toHaveBeenCalled();

    //4. The inputValue should be empty/string ""
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
