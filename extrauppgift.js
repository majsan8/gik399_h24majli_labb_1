//1. användaren får skriva in två tal (ett åt gången)

let userInput1 = prompt("Skriv in en siffra");
let userInput2 = prompt("Skriv in en annan siffra");

if (!userInput1 || isNaN(userInput1) || !userInput2 || isNaN(userInput2)) 
{
    console.log("Fel! Du har angett något annat än siffror. Vänligten skriv in siffror");
}
    else 
    {
        let number1 = Number(userInput1);
        let number2 = Number(userInput2);

        function calculate(a, b)
        {
            let sum = a + b;
            let product = a * b;
            let areEqual = (a === b);

            return {
                string: `Summa: ${sum}, Produkt: ${product}, Talen är lika: ${areEqual}`,
                array: [sum, product, areEqual],
                objekt: {
                    summa: sum,
                    produkt: product,
                    lika: areEqual
                }
            };
        }
    

        let results = calculate(number1, number2);

        console.log("Resultaten i strängformat:", results.string);
        console.log("Resultaten som en array;", results.array.join(", "));
        console.log("Tabell:")
        console.table(results.objekt);
    }