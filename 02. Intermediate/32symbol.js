// Symbols is a unique and immutable primitive data types intruduced .
// symbol is used as an identifier for object properties to avoid potential naming conflicts.
//
// Unlike strings or numbers, symbols are guaranteed to be unique.when you create a symbol,
// it is unique and cannot be recreated or changed . This uniqueness ensures that symbols will not
// collide with other property names, even if they have the same string reprsentations.

const mySymbol1 = Symbol("name");
const mySymbol2 = Symbol("name");

const obj = {};
obj[mySymbol1] = "value1";
obj[mySymbol2] = "value2";

console.log(obj);
