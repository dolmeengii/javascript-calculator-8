import parseNumbers from "./utils/parser.js";

const Calculator = {
    add(input) {
        if (input === "") return 0;
        const numbers = parseNumbers(input);
        return numbers.reduce((sum, num) => sum + num, 0);
    },
};

export default Calculator;