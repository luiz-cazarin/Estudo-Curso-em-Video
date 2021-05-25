// menor e maior numero
// adicionar numeros de um em 1 e ir exibino na caixa
// total de numeros
// soma de todos os valores
// media dos valores soma total / qtd numeros

let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n)<= 100){
        return true
    } else {
        return false
    }

}

function inLista(n, list){
    if (list.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}


function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
       valores.push(Number(num.value))
       let item = document.createElement('option')
       item.text = `Valor ${num.value} adicionado`
       lista.appendChild(item)
    } else {
        window.alert('Valor nao encontrado ou invalido')
    }
    num.value = ''
    num.focus()
}

function resultado(){
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let qtdValor = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior) 
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma/qtdValor


        res.innerHTML = ''
        valores.sort()
        res.innerHTML += `Valores: ${valores}<br>`
        res.innerHTML += `Menor valor  ${menor}<br>`
        res.innerHTML += `Maior valor  ${maior}<br>`
        res.innerHTML += `Somando todos os valores temos ${soma}<br>`
        res.innerHTML += `Média de todos os valores ${media.toFixed(2)}<br>`
        res.innerHTML += `Ao todo temos ${qtdValor} numeros cadastrados<br>`
    }
    
}


