let box = document.getElementById("box")
let pressMe = document.getElementById("pressMe");
pressMe.addEventListener("click", pausing);
function pausing(){
    if(document.getElementById("box").style.animationPlayState == "running"){
        document.getElementById("box").style.animationPlayState = "paused";
        checkwin()
    } else {
        document.getElementById("box").style.animationPlayState = "running";
    }
}



function checkwin(){
    let boxstyle = getComputedStyle(document.getElementById("box"));
    //alert(boxstyle.marginTop)
    //alert(parseInt(boxstyle.marginTop.substring(0,3)))
    if(parseInt(boxstyle.marginTop.substring(0,3)) < 50){
        document.getElementById("pressMe").innerHTML = "Win!!";
        runCounter("win");
    } else {
        document.getElementById("pressMe").innerHTML = "Lose :(";
        runCounter("lose");
    }
    }

let counter = document.getElementById("counter")
let win = 0
let lose = 0
function runCounter(result){
        if(result == "win"){
            win++
            counter.innerHTML = `Counter - Win: ${win} Lose: ${lose} Ratio:${Math.floor((win/(win+lose))*100)}%`
        } else {
            lose++
            counter.innerHTML = `Counter - Win: ${win} Lose: ${lose} Ratio:${Math.floor((win/(win+lose))*100)}%`
        }
    }
    

let hardMode = document.getElementById("hardMode");
hardMode.addEventListener("click", difficulty);
function difficulty(){
    box.style.animationDuration = "0.1s";
}