import { render, screen, waitFor } from "@testing-library/react";
import * as api from "./userApi";

import NameCollection from "./NameCollection";

describe("NameCollection test", () => {
    test("should display list with two items", async () => {
        const getData = jest
            .spyOn(api, "getNameCollection")
            .mockResolvedValue(["John Doe", "Jane Doe"])

        render(<NameCollection />)

        const element = await waitFor(() => screen.getAllByTestId("name"))

        expect(getData).toHaveBeenCalled();
        expect(element[0].textContent).toEqual("John Doe");
        expect(element[1].textContent).toEqual("Jane Doe");
    })
})
