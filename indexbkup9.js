// video 50:00
// array methods

const names = ['john', 'peter', 'bob'];

// // for (let i = 0; i < names.length; i++) {
// //   const element = names[i];
// //     console.log(element);
// // };

// names.forEach(function(name){
//     console.log(name);
// });

// // pero  si hacemos con map, nos devuelve un nuevo array

// const newNames = names.map(function (name){
//     return name;
// });


// console.log(newNames);

const newNames = names.filter(function (name){
    if (name !== 'peter'){
        return name;
    }
});
console.log(newNames);