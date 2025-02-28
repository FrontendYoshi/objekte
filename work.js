console.log("Hallo");

let lastName = "Poguntke";
console.log(lastName);

// ein ProduktObjekt erzeugen
let product = {
    id: "14a",
    name: "Müsli",
    preis: 5.23
};

let product2 = {
    id: "15a",
    name: "Seife",
    preis: 1.78
};

// console.log(product);
console.log(product.id);
console.log(product.name);
console.log(product.preis);

console.log(product2.id);
console.log(product2.name);
console.log(product2.preis);

let cars = ["VW", "Porsche", "Mercedes"];

console.log(cars[2]);

let products = [{ id: "1", name: "Mineralwasser", preis: 0.70 },
{ id: "2", name: "Saft", preis: 1.70 },
{ id: "3", name: "Bier", preis: 0.90 }
];
//Gib Bier in der Konsole aus
console.log(products[2].name);
//GIb Preis vom Saft aus
console.log(products[1].preis);
// Gib Mineralwasser aus
console.log(products[0].name);