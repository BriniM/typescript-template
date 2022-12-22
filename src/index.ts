interface Numbers {
    a: number;
    b: number;
}
export function add(numbers: Numbers) {
    return numbers.a + numbers.b;
}

const result: number = add({ a: 1, b: 1 });

console.log(`The program outputs: ${result}`);