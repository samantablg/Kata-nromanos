const equivalencia = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I"
};
const equivalencia_keys = Object.keys(equivalencia).reverse();
//al poner .key devuelve un array con las propiedades del objeto equivalencia
export const num = (value) => {

    if (typeof num !== 'number' || num < 0 || !Number.isInteger(num)) {
        console.log('La entrada no es válida');
    }

    
    let romano = [];

    equivalencia_keys.forEach(key => {
        while (num >= key) {
            num = num -key
            romano = romano+ equivalencia[key]
        }
});

return romano;
};