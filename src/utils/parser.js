function parseNumbers(input) {
    let delimiter = /,|:/;
    let expression = input;

    expression = expression.replace(/\\n/g, "\n");

    if(input.startsWith("//")){
        const match = expression.match(/^\/\/(.)\n(.*)$/);
        if(!match) throw new Error("[ERROR] 잘못된 구분자 형식입니다.");

        const [_, custom, rest] = match;

        const escapedCustom = custom.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        delimiter = new RegExp(`[${escapedCustom},:]`);
        expression = rest;
    }

    return expression.split(delimiter).map(Number);
}

export default parseNumbers;