// import {renderHook} from "@testing-library/react-hooks";
import {renderHook, act} from "@testing-library/react";

import useName from "./useName";

describe("useName test", () => {
    test("should return an object with name equals John", () => {
        const { result } = renderHook(useName);

        expect(result.current.name).toEqual("John");
        expect(result.current.setName).toEqual(expect.any(Function));
    });

    test("should update name when calls setName", () => {
        const newName = "Updated name";

        const {result} = renderHook(useName);

        act(() => {
            result.current.setName(newName);
        })

        expect(result.current.name).toEqual(newName);
    })
})
