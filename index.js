var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomimage = "dice" + randomNum1 + ".png";
var randomimagesrc = "images/" + randomimage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimagesrc);

// img 2
var randomNum2 = Math.floor(Math.random() * 6) + 1;
var randomimagesrc2 = "images/dice" + randomNum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomimagesrc2);

if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNum2 > randomNum1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}



