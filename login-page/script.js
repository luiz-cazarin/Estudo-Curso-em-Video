var ingredientes = ['água', 'mel', 'sal', 'mostarda'];
var modificado = [];

for(var i=0; i<ingredientes.length; i++){
    var letraInicial = ingredientes[i].charAt(0).toUpperCase(); // pegar 1 carecter pelo index
        var restoTexto = ingredientes[i].slice(1); // cortar texto
        var res = letraInicial + restoTexto;


    modificado[i] = res;
}

var ordenado = modificado.sort(function(a, b){
    return a.localeCompare(b)
});

console.log(ordenado);


