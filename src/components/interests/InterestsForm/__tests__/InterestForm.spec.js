import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import InterestsForm from "../InterestsForm";

jest.mock("./InterestsForm.module.css", () => ({
  form: "mockForm",
  input: "mockInput",
  button: "mockButton",
}));

describe("InterestsForm", () => {
  test("submits form correctly", () => {
    const onSubmit = jest.fn();
    const onChange = jest.fn();
    const placeholder = "Nuevo interés";

    render(
      <InterestsForm
        onSubmit={onSubmit}
        onChange={onChange}
        value=""
        placeholder={placeholder}
      />,
    );

    const inputElement = screen.getByPlaceholderText(placeholder);
    fireEvent.change(inputElement, { target: { value: "New Interest" } });

    const formElement = screen.getByTestId("interests-form");
    fireEvent.submit(formElement);

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith(expect.any(Object));
  });
});
