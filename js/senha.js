let contador = 0
function senhar(){
    let senha = document.getElementById("senha").value
    let senha2 = document.getElementById("senha2").value
    if (senha != senha2){
        while (contador < 3){
            contador++
            if ((contador < 3)){
                document.getElementById("resposta").innerHTML = "senha incorreta " + contador
                break
            }
            else{
                document.getElementById("resposta").innerHTML = "vc excedeu o máximo de tentativas " + contador
                break
            }
        }
    }
        
    else{
        document.getElementById("resposta").innerHTML = "senha correta "
    }
    document.getElementById("senha").value = ""
    document.getElementById("senha2").value = ""
}