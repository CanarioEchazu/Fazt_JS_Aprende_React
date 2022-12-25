function start() {
    return "Starting 1...";
}

console.log(start());

// tambien se puede escribir asi

console.log (function start2(){
    return "Starting 2...";
}());

// tambien se puede escribir con funcion anonima
console.log(function(){
    return "Starting 3...";
}()); // es una funcion asi que poner los parentesis.