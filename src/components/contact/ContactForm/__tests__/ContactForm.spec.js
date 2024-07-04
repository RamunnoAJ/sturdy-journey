import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ContactForm from "../ContactForm";

describe("ContactForm", () => {
  test("renders the form with initial state", () => {
    render(<ContactForm />);
    expect(screen.getByPlaceholderText("Nombre")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Correo electrónico"),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Mensaje")).toBeInTheDocument();
    expect(screen.getByText("Enviar mensaje")).toBeInTheDocument();
  });

  test("shows validation errors when form is submitted with empty fields", async () => {
    render(<ContactForm />);
    fireEvent.click(screen.getByText("Enviar mensaje"));

    await waitFor(() => {
      expect(screen.getByText("El nombre es obligatorio.")).toBeInTheDocument();
      expect(
        screen.getByText("El correo electrónico es obligatorio."),
      ).toBeInTheDocument();
      expect(
        screen.getByText("El mensaje es obligatorio."),
      ).toBeInTheDocument();
    });
  });

  test("shows success message when form is submitted with valid data", async () => {
    render(<ContactForm />);
    fireEvent.change(screen.getByPlaceholderText("Nombre"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByPlaceholderText("Correo electrónico"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Mensaje"), {
      target: { value: "Hello" },
    });

    fireEvent.click(screen.getByText("Enviar mensaje"));

    await waitFor(() => {
      expect(
        screen.getByText("El formulario se ha enviado correctamente"),
      ).toBeInTheDocument();
    });
  });

  test("resets the form and success message after a delay", async () => {
    jest.useFakeTimers();
    render(<ContactForm />);
    fireEvent.change(screen.getByPlaceholderText("Nombre"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByPlaceholderText("Correo electrónico"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Mensaje"), {
      target: { value: "Hello" },
    });

    fireEvent.click(screen.getByText("Enviar mensaje"));

    await waitFor(() => {
      expect(
        screen.getByText("El formulario se ha enviado correctamente"),
      ).toBeInTheDocument();
    });

    jest.advanceTimersByTime(3000);

    await waitFor(() => {
      expect(
        screen.queryByText("El formulario se ha enviado correctamente"),
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText("El nombre es obligatorio."),
      ).not.toBeInTheDocument();
    });

    jest.useRealTimers();
  });
});
