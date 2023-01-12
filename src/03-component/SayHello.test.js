import * as React from "react";
import { render, screen } from "@testing-library/react";

import SayHello from "./SayHello";

describe("SayHello component", () => {
    test("should display the person name", () => {
        const person = "John";

        render(<SayHello person={person} />)
        const element = screen.getByText("Hello John!");

        expect(element.tagName).toEqual("H1");
    })

    test("should display say hello component correctly", () => {
        const person = "John";

        const { asFragment } = render(<SayHello person={person} />)

        expect(asFragment()).toMatchSnapshot();
    })
})
