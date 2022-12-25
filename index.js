// video 1:12 Async/await con fetch

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then (function(){
//         console.log('finalizo la carga')
//     })

const ul = document.createElement("ul");
const li = document.createElement("li");

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     // data.forEach(function(post) {
//     //     const li = document.createElement('li');
//     //     li.innerHTML = post.title;
//     //     ul.append(li);
//     // });
//     // document.body.append(ul);
//   });

async function loadData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  data.forEach(function (post) {
    const li = document.createElement("li");
    li.innerHTML = post.title;
    ul.append(li);
  });
  document.body.append(ul);
}

loadData();
console.log("la linea 2");
