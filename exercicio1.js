// crie uma lista com 5 países

const paises = ['Brasil', 'Argentina', 'Colombia', 'Chile', 'Uruguai'];
console.log(paises);

// remova um país do fim da lista
// remove o chile

paises.pop();
console.log(paises); //

// adicione um pais ao início da lista
// adiciona o Canadá

paises.unshift('Canadá');
console.log(paises);

// remova um país do início da lista
// remove o Canadá

paises.shift();
console.log(paises);

// imprima o último item da lista

const ultimo = paises[paises.length - 1];
console.log(ultimo);

// imprimma o segundo país da lista 

console.log(paises[1]);

// imprima o país de índice 2
// o terceiro país da lista 


console.log(paises[2]);