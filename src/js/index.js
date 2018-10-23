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

const equiv = Object.keys(equivalencia).reverse();
console.log(equiv);
//al poner .keys devuelve un array con las propiedades del objeto equivalencia

export const num = (value) => {
  if ( typeof(value) == Number || value <= 0 || !Number.isInteger(value) ) {
    console.log('error');
  }

  let romano = [];

  equiv.forEach(key => {
    while (value >= key) {
      value = value - key;
      romano = romano + equivalencia[key];
    }
  });

return romano;
};