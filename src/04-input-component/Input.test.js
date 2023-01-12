import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Input from "./Input";

describe("Input component", () => {
    test("should display a label and input with empty value", () => {
        render(<Input />)

        const labelElement = screen.getByTestId("input-label");
        const inputElement = screen.getByTestId("input-username");

        expect(labelElement.textContent).toEqual("");
        expect(inputElement.value).toEqual("");
    })

    test("should update h3 when user input text", () => {
        const {asFragment} = render(<Input />)

        const labelElement = screen.getByTestId("input-label");
        const inputElement = screen.getByTestId("input-username");

        userEvent.type(inputElement, "John");

        expect(asFragment()).toMatchSnapshot()

        expect(labelElement.textContent).toEqual("John");
        expect(inputElement.value).toEqual("John");
    })
})
