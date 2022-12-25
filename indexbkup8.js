const background = "green";
const color = "white";
const isAuthorized = true;

const button = document.createElement('button');
button.innerText = 'Click me';
button.style = 'background; color: white;';
button.style =`background: ${isAuthorized? background : 'red'}; color: ${color}`;

button.addEventListener('click', () => {
    isAuthorized? alert('Authorized'): alert('Not Authorized');
});

document.body.append(button);