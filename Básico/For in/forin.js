const pessoa = {
    nome: "joão",
    idade: 25
};

for(let i in pessoa){
    document.writeln(i,pessoa.nome);
}

const cores = ['Vermelho','Azul','Verde'];

for(let i in cores){
    document.writeln(cores[i]);
}