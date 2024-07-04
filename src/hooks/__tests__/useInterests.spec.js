import { renderHook, act } from "@testing-library/react";
import useInterests from "../useInterests"; // Adjust path as needed

describe("useInterests hook", () => {
  beforeEach(() => {
    localStorage.clear(); // Clear localStorage before each test
  });

  it("should initialize with empty items if localStorage is empty", () => {
    let hookResult;
    act(() => {
      hookResult = renderHook(() => useInterests()).result;
    });
    expect(hookResult.current.items).toEqual([]);
  });

  it("should initialize with items from localStorage", () => {
    localStorage.setItem("items", JSON.stringify(["Test Item"]));
    let hookResult;
    act(() => {
      hookResult = renderHook(() => useInterests()).result;
    });
    expect(hookResult.current.items).toEqual(["Test Item"]);
  });

  it("should add a new item", () => {
    let hookResult;
    act(() => {
      hookResult = renderHook(() => useInterests()).result;
    });
    act(() => {
      hookResult.current.addItem("Test Item");
    });
    expect(hookResult.current.items).toEqual(["Test Item"]);
  });

  it("should edit an item", () => {
    let hookResult;
    act(() => {
      hookResult = renderHook(() => useInterests()).result;
    });
    act(() => {
      hookResult.current.addItem("Test Item");
      hookResult.current.editItem(0, "Edited Item");
    });
    expect(hookResult.current.items).toEqual(["Edited Item"]);
  });

  it("should delete an item", () => {
    let hookResult;
    act(() => {
      hookResult = renderHook(() => useInterests()).result;
    });
    act(() => {
      hookResult.current.addItem("Test Item");
      hookResult.current.deleteItem(0);
    });
    expect(hookResult.current.items).toEqual([]);
  });
});
