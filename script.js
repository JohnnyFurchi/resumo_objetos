
function obj(n, s){

    this.nome = n;
    this.sobrenome = s;



}


// var a = {
//     nome: 'Johnny',
//     sobrenome: 'Martin',

// }

var a = new obj('Johnny', 'Martin')

console.log(a['sobrenome'])