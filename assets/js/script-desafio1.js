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



