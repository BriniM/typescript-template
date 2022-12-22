import { add } from "../index";

it("Should return 2 when passed a=1, b=1", () => {
    const testParameter = { a:1, b: 1 };
    const result = add(testParameter);

    expect(result).toBe(2);
});
