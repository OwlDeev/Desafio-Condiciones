//DESAFIO 3------------------------------------------------------
function fadeOut(div){
    div.style.opacity = '0';
    div.style.transition = 'opacity 0.5s ease-in-out';
}

function fadeIn(div){
    div.style.opacity = '1';
    div.style.transition = 'opacity 0.5s ease-in-out';
}
    
//variables 
var clueImgOne = document.getElementById('clueImgOne')
var clueImgTwo = document.getElementById('clueImgTwo')
    
//clueOne
clueImgOne.onmouseover = function(){
    fadeOut(clueImgOne)
    fadeIn(clueOne)
    fadeIn(clueImgTwo)
    fadeOut(clueTwo)
}

clueImgOne.onmouseout = function(){
    fadeIn(clueImgOne)
    fadeOut(clueOne)
    fadeOut(clueTwo)
    fadeIn(clueImgTwo)
}

//clueTwo
clueImgTwo.onmouseover = function(){
    fadeOut(clueImgTwo)
    fadeIn(clueTwo)
    fadeIn(clueImgOne)
    fadeOut(clueOne)
}

clueImgTwo.onmouseout = function(){
    fadeIn(clueImgTwo)
    fadeOut(clueTwo)
    fadeOut(clueOne)
    fadeIn(clueImgOne)
}

//desbloquear candado
var main = document.getElementById('main')
var form = document.getElementById('form')
var winDiv = document.getElementsByClassName('winDiv')[0]
var repeatButton = document.getElementById('repeatButton')
var numberOne = document.getElementById('numberOne')
var numberTwo = document.getElementById('numberTwo')
var numberThree = document.getElementById('numberThree')
var allNumber = changeSelect()

unlock.onclick = function(){
    if(allNumber == '911' || allNumber == '714'){
        fadeOut(main)  
        fadeIn(winDiv)
    }else{
        unlock.value = 'Pass Incorrect';
        form.style.backgroundColor = 'red ';
        numberOne.style.backgroundColor = 'red';
        numberTwo.style.backgroundColor = 'red ';
        numberThree.style.backgroundColor = 'red ';
        setInterval(() => {
            form.style.backgroundColor = '#2c637d';
            unlock.value = 'Unlock';
            numberOne.style.backgroundColor = '#2c637d';
            numberTwo.style.backgroundColor = '#2c637d';
            numberThree.style.backgroundColor = '#2c637d';
        }, 1500);
    }
}

numberOne.addEventListener("change", changeSelect);
numberTwo.addEventListener("change", changeSelect);
numberThree.addEventListener("change", changeSelect);

function changeSelect() {
    numberOne.value = numberOne.value.toUpperCase();
    numberTwo.value = numberTwo.value.toUpperCase();
    numberThree.value = numberThree.value.toUpperCase();
    allNumber = numberOne.value + numberTwo.value + numberThree.value;
    return allNumber.toString;
}

repeatButton.onclick = function(){
    fadeIn(main)  
    fadeOut(winDiv)
}

