function hello(){
    return "Hola mundo";
}

// const result = hello();
// console.log(result);
console.log(hello());


/* Ahora voy a crear una funcion dentro de otra funcion */
function hello2(){
    return function(){
        return "Hola mundo";
    }
}

console.log(hello2()); // no muestra nada porque no se esta ejecutando la funcion
console.log(hello2()()); // muestra el resultado de la funcion

/* tambien la funcion es recir como parametro */
function hello3(name){
    return 'Hola ' + name;
}

console.log(hello3('Dario'));

/* voy a crear una funcion que suma dos numeros */

function add(x,y){
    return x + y;
}

console.log(add(20,30));

/* ahora parametros por defecto*/

function add2(x=0,y=0){
    return x + y;
}

console.log(add2(10,5));

/* tambien se puede agregar objetos y arreglos */

const user = {
    name: 'Dario',
    lastname: 'Echazu',
    age: 30,
    address: {
        country: 'Argentina',
        city: 'Salta',
        street: 'Dean Funes 924'
    },
    friends: ['Juan','Pedro','Maria'],
    active: true,
    sendMail: function(){
        return 'send mail...'
    }
}

console.log(user.address.street);
console.log(user.friends[0]);
console.log(user.sendMail());

const name = "laptop";
const price = 300;

// /* ahora voy a crear una funcion que recibe un objeto */
// function product(name,price)

const newProduct = {
    name,price
}

console.log(newProduct.name);