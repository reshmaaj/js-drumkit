// detects button press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);


    });
}

// detects keyboard press
document.addEventListener("keydown", function (event) {
    makeSound(event.key);

})

function makeSound(key) {
    switch (key) {
        case "w":
            var btnw = new Audio("./sounds/tom-1.mp3");
            btnw.play();
            break;
        case "a":
            var btna = new Audio("./sounds/tom-2.mp3");
            btna.play();
            break;
        case "s":
            var btns = new Audio("./sounds/tom-3.mp3");
            btns.play();
            break;
        case "d":
            var btnd = new Audio("./sounds/tom-4.mp3");
            btnd.play();
            break;
        case "j":
            var btnj = new Audio("./sounds/snare.mp3");
            btnj.play();
            break;
        case "k":
            var btnk = new Audio("./sounds/crash.mp3");
            btnk.play();
            break;
        case "l":
            var btnl = new Audio("./sounds/kick-bass.mp3");
            btnl.play();
            break;

        default:
            console.log(key);
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed")

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100)
}