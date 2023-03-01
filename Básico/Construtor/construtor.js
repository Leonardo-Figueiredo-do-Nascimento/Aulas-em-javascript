function criarCelular(marca){
    return {
        marca : marca,
        tamanho : {
            vetical: 75,
            horizontal: 155
        },
        cargaBateria,
        ligar : function(){
            console.log("ligado")
        }
    }

}

function Celular(marca,cargaBateria){
    this.marca = marca;
    this.cargaBateria = cargaBateria;

    this.ligar = function(){
        console.log("Fazendo ligação")
    };
}

let c1 = new Celular("ASUS",1855);

console.log(c1);