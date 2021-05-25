function gerarTabuada() {
    let num = document.getElementById('txtNum')
    let res = document.getElementById('res')
    window.KeyboardEvent


    let n = Number.parseInt(num.value)
    
    res.innerHTML = ''
    for(let c=1; c<=10; c++){
        res.innerHTML += `${n} x ${c} = ${n*c}</br>`
    }

    //res.innerHTML = `Resultado: ${n}`

}