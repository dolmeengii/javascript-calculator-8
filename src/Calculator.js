const Calculator = {
    add(input) {
        if (input === "") return 0;

        let delimiter = /,|:/;

        let expression = input.replace(/\\n/g, "\n");

        if(expression.startsWith("//")){
            const match = expression.match(/^\/\/(.)\n(.*)$/);
            if(!match) throw new Error("[ERROR] 잘못된 구분자 형식입니다.");

            const [_, custom, rest] = match;

            const escapedCustom = custom.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            delimiter = new RegExp(`[${escapedCustom},:]`);
            expression = rest;
        }

        const numbers = expression.split(delimiter).map(Number);
        return numbers.reduce((sum, num) => sum + num, 0);
    },
};

export default Calculator;;