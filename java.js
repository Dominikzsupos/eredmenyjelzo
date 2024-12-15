let bool = false
const gomb1 = document.getElementById("vegleg2")
const gomb2 = document.getElementById("vegleg1")

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



function igazol(){
    let vegleg1 = gomb1.value
    let vegleg2 = gomb2.value

    if (vegleg1 != "" && vegleg2 != ""){
        csp1Name = vegleg1
        csp2Name = vegleg2

        document.getElementById("csap1").innerText = csp1Name
        document.getElementById("csap2").innerText = csp2Name
        

        document.getElementById("gomb1").disabled = true
        document.getElementById("gomb2").disabled = true
        document.getElementById("kialitas1").disabled = false;
        document.getElementById("kialitas2").disabled = false;
        document.getElementById("pluszido").disabled =false;
        document.getElementById("plusz").disabled = false;
        document.getElementById("minusz").disabled = false;
        document.getElementById("plusz1").disabled = false;
        document.getElementById("minusz1").disabled = false;
    }
}

function ad1(){
    let szam = parseInt(document.getElementById("gol1").innerText)
    szam += 1
    document.getElementById("gol1").innerText = szam
}
function kiv1(){
    let szam = parseInt(document.getElementById("gol1").innerText)
    if (szam > 0){
        szam -= 1
    document.getElementById("gol1").innerText = szam
    }
    
}
function ad2(){
    let szam = parseInt(document.getElementById("gol2").innerText)
    szam += 1
    document.getElementById("gol2").innerText = szam
}
function kiv2(){
    let szam = parseInt(document.getElementById("gol2").innerText)
    if (szam > 0){
        szam -= 1
    document.getElementById("gol2").innerText = szam
    }
}




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

    let perc = 0
    let masperc = 1

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


