const numeros = [1,2,3];

for(let i=0;i<numeros.length;i++){
    document.write(numeros[i]);
}

//adicionando elemento no inicio do array
numeros.unshift(0);
document.write("<br> INSERÇÃO <br>")
for(let i=0;i<numeros.length;i++){
    document.write(numeros[i]);
}

//adicionando elemento no meio do array, primeiro é a localização do indice, depois é o valor que deseja remover, e por ultimo é o valor que quer inserir entre
numeros.splice(2,0,2.5)
document.write("<br> INSERÇÃO <br>")
for(let i=0;i<numeros.length;i++){
    document.write(numeros[i]+" ");
}

//adicionando elemento no fim
numeros.push(4);
document.write("<br> INSERÇÃO <br>")
for(let i=0;i<numeros.length;i++){
    document.write(numeros[i]+" ");
}

document.write("<br>------ENCONTRANDO ELEMENTO<br>");
//acha a localização do valor dado
document.write(numeros.indexOf(3));

document.write("<br>------ENCONTRANDO ELEMENTO Referencia<br>");
//achando um objeto

const marcas = [
    { id:1, nome:'a'},
    { id:2, nome:'b'}
]

const marca = marcas.find(function(marca){
    return marca.nome;
})

document.write(marca.nome);

//removendo um valor do array
document.write("<br>------REMOVENDO ELEMENTO<br>");

//remove o ultimo elemento
numeros.pop()

//remove o primeiro elemento
numeros.shift()

//remove o elemento do meio
numeros.splice(1,1)

for(let i=0;i<numeros.length;i++){
    document.write(numeros[i]+" ");
}

//esvaziando um array
document.write("<br>------esvaziando array<br>");

numeros.splice(0,numeros.length);

if(numeros.length===0){
    document.write("Vetor vazio")
}

document.write("<br>------combinando arrays<br>");
const a1 = [1,2,3,4,5,6];
const a2 = [7,8,9,10];

//concatena os arrays
const ac = a1.concat(a2);

for(let i=0;i<ac.length;i++){
    document.write(ac[i]+" ");
}

//dividindo array
document.write("<br>------Dividindo arrays<br>");

const cortado = ac.slice(0,6);
for(let i=0;i<cortado.length;i++){
    document.write(cortado[i]+" ");
}