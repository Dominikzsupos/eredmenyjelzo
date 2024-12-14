let bool = false

//Az összes gomb disabled legyen a csapat véglegesítésen kivül amíg meg nem adja a csapat nevet VAGY amíg el nem indítja az időt, 
//utána a csapat megadás eltünik VAGY csak disabled-et adsz neki, és a gombok enabledek,
// de mivel te dolgozol az id-kel ezért írd át ha nem tetszenek, csak ideiglenesen raktam be 

document.getElementById("kialitas1").disabled = true;
document.getElementById("kialitas2").disabled = true;
document.getElementById("pluszido").disabled = true;
document.getElementById("plusz").disabled = true;
document.getElementById("minusz").disabled = true;
document.getElementById("plusz1").disabled = true;
document.getElementById("minusz1").disabled = true;
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