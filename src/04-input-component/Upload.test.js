import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Upload from "./Upload";

test("show filename after user upload a file", () => {
    const filename = "enigma.png";

    render(<Upload />)
    const file = new File(['file'], filename, {
        type: "image/png"
    })

    const inputElement = screen.getByLabelText("Upload File");

    userEvent.upload(inputElement, file)

    expect(screen.getByText(/enigma\.png/)).toBeInTheDocument();
})
