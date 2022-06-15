//DESAFIO 1------------------------------------------------------

let imgMain = document.getElementsByClassName('imgMain');
    imgMain = imgMain[0];
    function imgOnClick(){
    if(imgMain.style.border == "1px solid red"){
        imgMain.style.border = 'none';
    }else{
        imgMain.style.border = '1px solid red';
    }
}

//DESAFIO 2------------------------------------------------------

//div principal y resultado
let divFade = document.getElementsByClassName('fade-in');
let divResult = document.getElementsByClassName('fade-out')[0];

let inputSticker1 = document.getElementById('inputSticker1')
    inputSticker1.value = '0';
let inputSticker2 = document.getElementById('inputSticker2')
    inputSticker2.value = '0';
let inputSticker3 = document.getElementById('inputSticker3')
    inputSticker3.value = '0';

//boton y label
let labelResult = document.getElementsByClassName('labelResult')[0];
let buttonVerify = document.getElementById('buttonVerify');
let buttonRepeat = document.getElementById('buttonRepeat');

//label resukltado
let resultInput1 = document.getElementById('resultInput1');
let resultInput2 = document.getElementById('resultInput2');
let resultInput3 = document.getElementById('resultInput3');

buttonVerify.onclick = function(){
    let sumaValueSticker = Number(inputSticker1.value) + Number(inputSticker2.value) + Number(inputSticker3.value)
    if(sumaValueSticker > 10){
        labelResult.innerHTML = 'Llevas demasiados stickers';
    }else if(sumaValueSticker == 0){
        labelResult.innerHTML = 'No llevaras ningun sticker?';    
    }else{
        for(var i = 0; i < divFade.length; i++){
            divFade[i].style.opacity = '0';
        }

        divResult.style.opacity = '1';
        resultInput1.innerHTML = ' X ' + inputSticker1.value;
        resultInput2.innerHTML = ' X ' + inputSticker2.value;
        resultInput3.innerHTML = ' X ' + inputSticker3.value;
        labelResult.innerHTML = String('Llevas ' + sumaValueSticker + ' sticker')
    }

    //Limpiar inputs
    inputSticker1.value = '0';
    inputSticker2.value = '0';
    inputSticker3.value = '0';
}

//Boton repetir fade-out y fade-in
buttonRepeat.onclick = function(){
    divResult.style.opacity = '0';
    for(var i = 0; i < divFade.length; i++){
        divFade[i].style.opacity = '1';
    }
}

//DESAFIO 3------------------------------------------------------





