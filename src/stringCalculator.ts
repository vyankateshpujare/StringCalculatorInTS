export function add(numbers: string): number {
    try {
        if (numbers === "")
            return 0;

        let delimiter = ",";
        if (numbers.startsWith("//")) {
            const parts = numbers.split("\n");
            delimiter = parts[0].substring(2);
            numbers = parts[1];
        }

        const stringArray = numbers.split(new RegExp(`[${delimiter}\n]`));

        let negativesNumArray: number[] = [];
        let sum: number = 0;
        stringArray.forEach(element => {
            let number = Number(element)
            if (!NaN) {
                if (number < 0) {
                    negativesNumArray.push(number)
                } else if (number <= 1000) {
                    sum += number;
                }
            }
        });

        if (negativesNumArray.length) {
            throw new Error("Negative numbers not allowed: " + negativesNumArray.join(","));
        }
        return sum
    } catch (error) {
        throw error
    }
}
