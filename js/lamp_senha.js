let contador = 0
function interruptor(){
    const lamp = document.querySelector("#img")
    let senha = document.querySelector("#senha").value

    if (senha == "info2024"){
        if (lamp.src.match('img/lampada_apagada.png')){
            lamp.src = 'img/lampada_acesa.png'
            document.querySelector("#h3").innerHTML = "Lampada acesa! Digite a senha para apagar novamente"
            document.querySelector("#btn").innerHTML = "INTERRUPTOR"
            
            document.body.style.backgroundColor = "#FFFF96ED"
            document.querySelector("#h3").style.color = "black"
            document.body.style.color = "black"
        }

        else{
            lamp.src = 'img/lampada_apagada.png'
            document.querySelector("#h3").innerHTML = "Digite a senha para acender a lampada"
            document.querySelector("#btn").innerHTML = "INTERRUPTOR"

            document.body.style.backgroundColor = "black"
            document.querySelector("#h3").style.color = "white"
            document.body.style.color = "white"
        }
    }

    if (senha != "info2024"){
        while (contador < 3){
            contador++

            if (contador < 3){
                lamp.src = 'img/lampada_apagada.png'
                document.querySelector("#h3").innerHTML = "Digite a senha para acender a lampada"
                document.querySelector("#btn").innerHTML = "INTERRUPTOR"

                document.body.style.backgroundColor = "black"
                document.querySelector("#h3").style.color = "white"
                document.body.style.color = "white"
                break
            }

            else{
                lamp.src = 'img/lampada_quebrada.png'
                document.querySelector("#h3").innerHTML = "Digite a senha correta para consertar a lampada."
                document.querySelector("#btn").innerHTML = "CONSERTAR"

                document.body.style.backgroundColor = "black"
                document.querySelector("#h3").style.color = "white"
                document.body.style.color = "white"
                break
            }
        }
    }
    console.log(contador)
}