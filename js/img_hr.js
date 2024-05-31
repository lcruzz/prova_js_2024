function hora(){
    const img = document.querySelector("#img")
    let data = new Date()
    let hr = data.getHours()
    let min = data.getMinutes()
    let sec = data.getSeconds()

    if ((hr >= 5) && (hr < 12)){
        img.src = 'img/bom-dia.jpg'
        document.querySelector("#h3").innerHTML = "Bom dia!"
    }
    else if ((hr >= 12) && (hr <= 18)){
        img.src = 'img/boa-tarde.jpg'
        document.querySelector("#h3").innerHTML = "Boa tarde!"
    }
    else{
        img.src = 'img/boa-noite.jpg'
        document.querySelector("#h3").innerHTML = "Boa noite!"
    }

    if (hr < 10){
        hr = "0" + hr
    }
    if (sec < 10){
        sec = "0" + sec
    }
    if (min < 10){
        min = "0" + min
    }

    document.querySelector("#hora").innerHTML = `${hr}:${min}:${sec}`

    setInterval("hora()", 1)
}