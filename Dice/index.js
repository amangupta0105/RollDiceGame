var randomNumber1=Math.floor(Math.random()*6+1);
var x= document.getElementsByClassName("img1")[0];
if(randomNumber1 == 1){
  x.setAttribute("src", "images/dice1.png");
}
if(randomNumber1 == 2){
  x.setAttribute("src", "images/dice2.png");
}
if(randomNumber1 == 3){
  x.setAttribute("src", "images/dice3.png");
}
if(randomNumber1 == 4){
  x.setAttribute("src", "images/dice4.png");
}
if(randomNumber1 == 5){
  x.setAttribute("src", "images/dice5.png");
}
if(randomNumber1 == 6){
  x.setAttribute("src", "images/dice6.png");
}


var randomNumber2=Math.floor(Math.random()*6+1);
var y= document.getElementsByClassName("img2")[0];
if(randomNumber2 == 1){
  y.setAttribute("src", "images/dice1.png");
}
if(randomNumber2 == 2){
  y.setAttribute("src", "images/dice2.png");
}
if(randomNumber2 == 3){
  y.setAttribute("src", "images/dice3.png");
}
if(randomNumber2 == 4){
  y.setAttribute("src", "images/dice4.png");
}
if(randomNumber2 == 5){
  y.setAttribute("src", "images/dice5.png");
}
if(randomNumber2 == 6){
  y.setAttribute("src", "images/dice6.png");
}


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player1 is WINNER !";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML="Player2 is WINNER !";
}
else{
  document.querySelector("h1").innerHTML="DRAW !";
}
