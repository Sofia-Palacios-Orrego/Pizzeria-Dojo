function pizzaOven (tipoCorteza, tipoSalsa, quesos, salsas){
    var pizza ={};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    return pizza;

}

var pizza1 = pizzaOven ("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
console.log (pizza1);

var pizza2 = pizzaOven ("lanzada a mano" , "marinara" , ["mozzarella", "feta"] , ["champiñones", "aceitunas", "cebollas"]);
console.log(pizza2);

var pizza3 = pizzaOven ("estilo italiana", "tradicional", ["mozarella"], ["tomate", "hojas de albahaca" ]);
console.log(pizza3);

var pizza4 = pizzaOven ("borde queso", "tradicional con soya", ["mozarella"], ["champiñones", "choclo", "cebolla"]);
console.log(pizza4);


var tipoCorteza = [
    "estilo Chicago",
    "lanzada a mano", 
    "estilo italiana",
    "borde queso",
];

var tipoSalsa =[
    "tradicional",
    "marinara",
    "tradicional con soya", 
    "salsa blanca",

];

var quesos=[
    "mozarella",
    "feta",
    "cheddar",
    "queso azul",
    "parmesano"
];  


var salsas=[
    "pepperoni",
    "choclo",
    "champiñones",
    "cebolla",
    "piña",
    "aceitunas",
    "tomates",


]

function randomRange (max, min) {
    return Math.floor(Math.random() * max - min) + min;
}


function randomPick(arr) {
    var i = Math.floor (arr.length * Math.random());
    return arr[i];

}

function randomPizza (){

    var pizza = {};
    pizza.tipoCorteza = randomPick(tipoCorteza);
    pizza.tipoSalsa = randomPick(tipoSalsa);
    pizza.quesos = [];
    pizza.salsas = [];
    for(var i=0; i<randomRange(2,1); i++){
        pizza.quesos.push(randomPick(quesos));
    }

    for(var i=0;i<randomRange(4,1); i++) {
        pizza.salsas.push(randomPick(salsas));
    }
    return pizza;
}
console.log(randomPizza());