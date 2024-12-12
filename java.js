let bool = false

function play(){

    if (bool == false) {
        let time = setInterval(indit, 1000)
        bool = true
    }
    else{
        all()
        bool = false
    }


}

let perc = 1
    let masperc = 0

function indit(){
console.log(1)

    

    if(document.getElementById("roma").innerHTML != "I" && perc == 0)
    {
        clearInterval(time)
    }
    else{

        if (perc == 0) {
            document.getElementById("roma").innerHTML = "II"
            perc = 30
        }
        else if(masperc == 0){
            perc -= 1
            document.getElementById("perc").innerHTML = perc
            masperc = 60
        }
        masperc -= 1
        document.getElementById("masperc").innerHTML = masperc


    }
    
    document.getElementById("perc").innerHTML = perc


}

function all(){
    clearInterval(time)

}

//console.log(document.getElementById("roma").innerHTML)
//console.log(document.getElementById("perc").innerHTML)
//console.log(document.getElementById("masperc").innerHTML)