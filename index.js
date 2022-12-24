const button = document.createElement('button');
button.innerText = 'Click me';

button.addEventListener('click', function(){
    alert('Cliked')
});

document.body.append(button);