


function sounds(l) {

switch(l) {

    case 'cock': 
    let soundgalo = document.getElementById("audio1");
    soundgalo.play();

    break;

    case 'lion': 
    let soundlion = document.getElementById("audio2");
    soundlion.play();

    break;

    case 'owl': 
    let soundowl = document.getElementById("audio3");
    soundowl.play();

    break;

    case 'cat': 
    let soundcat = document.getElementById("audio4");
    soundcat.play();

    break;

    case 'dog': 
    let sounddog = document.getElementById("audio5");
    sounddog.play();

    break;

    case 'elephant': 
    let soundel = document.getElementById("audio6");
    soundel.play();

    break;

    case 'duck': 
    let soundduck = document.getElementById("audio7");
    soundduck.play();

    break;

    case 'cow': 
    let soundcow = document.getElementById("audio8");
    soundcow.play();

    break;
}



}

function mouseover(n) {

  let all = document.getElementsByClassName('tamanhos')[n];
  let show = document.getElementsByClassName('tamanhos2')[n];

    all.style.animationName = "over";
    all.style.animationDuration = "0.5s";
    all.style.animationFillMode = "forwards";

    show.style.animationName = "overicon";
    show.style.animationDuration = "0.7s";
    show.style.animationFillMode = "forwards";


}

function mouseleave(n) {

    let all = document.getElementsByClassName('tamanhos')[n];
    let show = document.getElementsByClassName('tamanhos2')[n];

    all.style.animationName = "leave";
    all.style.animationDuration = "0.5s";
    all.style.animationFillMode = "forwards";

    show.style.animationName = "leaveicon";
    show.style.animationDuration = "0.7s";
    show.style.animationFillMode = "forwards";
}