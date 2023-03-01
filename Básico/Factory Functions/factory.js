function criarCelular(marca){
    return {
        marca : marca,
        tamanho : {
            vetical: 75,
            horizontal: 155
        },
        cargaBateria: 5000,
        ligar : function(){
            console.log("ligado")
        }
    }

}

const cel1 = criarCelular("ASUS <br>");
document.write(cel1.marca)
const cel2 = criarCelular("Samsumg A10")
document.write(cel2.marca)