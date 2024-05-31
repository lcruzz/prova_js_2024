let lista = [""]
function array(i){
    let add = document.querySelector("#lista").value

    if (i==1){
        lista.push(add)
        document.querySelector("#listado").innerHTML = lista.join("<br> -")
    }
    else if (i==2){
        lista.pop()
        document.querySelector("#listado").innerHTML = lista.join("<br> -")
    }
    else if (i==3){
        document.querySelector("#listado").innerHTML = lista = [""]
    }
    document.querySelector("#lista").value = ""
}