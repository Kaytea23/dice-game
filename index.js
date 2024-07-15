var randomNumber1 = Math.round(Math.random() * 5) + 1;
var image1 = "/images/dice" + randomNumber1 + ".png";

document.querySelector("img.img1").setAttribute("src", image1);

var randomNumber2 = Math.round(Math.random() * 5) + 1;
var image2 = "/images/dice" + randomNumber2 + ".png";

document.querySelector("img.img2").setAttribute("src", image2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
