import * as calculator from "./calculator";
import * as business from "./business";

jest.mock("./business", () => ({
    isLowerThan: jest.fn(),
    max: 10
}))

describe("calculator function", () => {
    describe("add", () => {
        test("should return 4 when passing a equals 2 and b equals 2", () => {
            // Arrange
            const a = 2;
            const b = 2;

            // Action
            const result = calculator.add(a, b);

            // assert
            expect(result).toEqual(4);
        });

        test("should call to isLowerThan when passing a equals and b equals 2", () => {
            const a = 2;
            const b = 2;

            const result = calculator.add(a, b);

            expect(business.isLowerThan).toHaveBeenCalled();
            expect(business.isLowerThan).toHaveBeenCalledWith(4, 10)
        });
    });

    describe("multiple", () => {
        test("should return 8 when passing a equals 4 and b equals 2", () => {
            // Arrange
            const a = 4;
            const b = 2;

            // Action
            const result = calculator.multiple(a, b);

            // assert
            expect(result).toEqual(8);
        });

        describe("multiple and add", () => {
            test("should return 12 when passing a equals 4 and b equals 2", () => {
                const a = 4;
                const b = 2;

                const result = calculator.multipleAndAdd(a, b);

                expect(result).toEqual(12);
            });

            test("should call isLowerThan when passing a equals and b equals 2", () => {
                const a = 2;
                const b = 2;

                const result = calculator.multipleAndAdd(a, b);

                expect(business.isLowerThan).toHaveBeenCalled();
                expect(business.isLowerThan).toHaveBeenCalledWith(6, 10)
            });

            test("should not call isLowerThan when passing a euqlas 10 and b equals 2", () => {
                const a = 10;
                const b = 2;

                calculator.multipleAndAdd(a, b);

                expect(business.isLowerThan).not.toHaveBeenCalled();
            })
        })
    })
})
