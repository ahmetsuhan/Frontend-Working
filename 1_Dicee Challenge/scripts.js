//alert("is working?");
var btnStart = document.getElementById("start");
var btnStop = document.getElementById("stop");

var playersImg = document.querySelectorAll(".dice img");
playersImg.forEach(function(item) {
    item.setAttribute("src", "images/dice6.png");
});

function RandomNumberGenerator() {
    return Math.floor(Math.random() * 6) + 1;
}

var images = [
    { name: "1", src: "images/dice1.png" },
    { name: "2", src: "images/dice2.png" },
    { name: "3", src: "images/dice3.png" },
    { name: "4", src: "images/dice4.png" },
    { name: "5", src: "images/dice5.png" },
    { name: "6", src: "images/dice6.png" },
]

var settings = {
    duration: "2000"
}
var player1Score = 0;
var player2Score = 0;

function RollADicee() {
    let randomNumber1;
    let img1 = 0;
    let img2 = 0;
    playersImg.forEach(function(item) {
        randomNumber1 = RandomNumberGenerator();
        item.setAttribute("src", images[randomNumber1 - 1].src);
        if (HasClass(item, "img1")) {
            //console.log("img1 " + randomNumber1);
            img1 = randomNumber1;
        } else {
            //console.log("img2 " + randomNumber1);
            img2 = randomNumber1;
        }
        if (img1 > img2) {
            document.getElementById("header").innerHTML = "Player1 Win!";
            player1Score++;
            document.getElementById("player1").innerHTML = `Player1 Score:${player1Score}`;
        } else if (img2 > img1) {
            document.getElementById("header").innerHTML = "Player2 Win!";
            player2Score++;
            document.getElementById("player2").innerHTML = "Player2 Score:" + player2Score.toString();
        } else {
            document.getElementById("header").innerHTML = "Null!";
        }

    });

}
var interval;
btnStart.addEventListener("click", function() {
    interval = setInterval(RollADicee, settings.duration);
});
btnStop.addEventListener("click", function() {
    clearInterval(interval);
});
//var interval = setInterval(RollADice, settings.duration);
//clearInterval(interval);

function HasClass(e, className) {
    if (e.getAttribute("class", className) == className) {
        return true;
    } else {
        return false;
    }
}