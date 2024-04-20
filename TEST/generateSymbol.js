import ms from "milsymbol";




// milsymbol code 
const symbol = new ms.Symbol('SFG-UCI----D');
const Generate = symbol.asSVG();
console.log("Svg working");

module.exports = Generate;