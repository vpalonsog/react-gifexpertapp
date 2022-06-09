import { renderHook } from "@testing-library/react";
import React from "react";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe("Testing useFetchGifs hook", () => {
  test("it should return initial state", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("One Punch")
    );

    const { data, loading } = result.current;

    await waitForNextUpdate();
    expect(data).toEqual([]);

    expect(loading).toBe(true);
  });

  test("it should return an array of images and loading in false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("One Punch")
    );
    await waitForNextUpdate();
    const { data: images, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
