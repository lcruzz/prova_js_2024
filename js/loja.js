function desconto(){
    let valor = +document.querySelector("#valor").value
    let taxa = +document.querySelector("#taxa").value
    let i = taxa/100
    let a = valor * i
    let resultado = valor - a
    document.querySelector("#result").innerHTML = resultado
}
function acressimo(){
    let valor = +document.querySelector("#valor").value
    let taxa = +document.querySelector("#taxa").value
    let i = taxa/100
    let a = valor * i
    let resultado = valor + a
    document.querySelector("#result").innerHTML = resultado
}
