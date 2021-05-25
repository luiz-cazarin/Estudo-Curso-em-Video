function gerarNum() {
    var n1 = document.getElementById('txtIni')
    var n2 = document.getElementById('txtFim')
    var n3 = document.getElementById('txtPas')
    
    var res = document.getElementById('res')
    if(n1.value.length == 0 || n2.value.length == 0 || n3.value.length == 0){
        res.innerHTML = 'Impossivel contar!'
    }else{
        let i = Number(n1.value)
        let f = Number(n2.value)
        let p = Number(n3.value)
        if(p <=0 ){
            p = 1
        }
        if (i < f) {
            for(let c=i; c<=f; c+= p){
                res.innerHTML += ` ${c}\u{1F603} `
            }
        } else {
            for(let c=i; c>=f; c-=p){
                res.innerHTML += ` ${c}\u{1F603} `
            }
        }
    }
    
    

}