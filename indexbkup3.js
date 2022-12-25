const user = {
    name: 'Dario',
    age: 52
}

function printInfo(user){
    return '<h1> Hola '+ user.name +  '</h1><h2>Subtitulo con h2</h2>';
}

console.log(printInfo(user));

document.body.innerHTML = printInfo(user);