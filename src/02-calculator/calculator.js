import {isLowerThan, max} from "./business";

export const add = (a, b) => {
    const result = a + b;

    if (result < max) {
        isLowerThan(result, max)
    }

    return result;
}

export const multiple = (a, b) => {
    const result = a * b;

    return result;
}

export const multipleAndAdd = (a, b) => {
    const result1 = multiple(a, b);
    const result2 = add(result1, a);

    return result2;
}
