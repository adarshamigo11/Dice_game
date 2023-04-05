var randomNo1 = Math.floor(Math.random() * 6 ) + 1;
var randomDiceImage = "dice" + randomNo1 + ".png";
var randomImageSrc =  randomDiceImage ;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSrc);

var randomNo2 = Math.floor(Math.random() * 6) + 1 ;
var randomImageSrc2 = "dice" + randomNo2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);

if(randomNo1>randomNo2){
    document.querySelector("h1").innerHTML="😍🤣player 1 wins!!!";
}else if  (randomNo2>randomNo1){
    document.querySelector("h1").innerHTML="player 2 wins ❤❤!!";
}else document.querySelector("h1").innerHTML="tie between 2";