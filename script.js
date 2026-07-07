
// ================= TYPING INTRO =================

const text = "Hey Gracie...";
const typing = document.getElementById("typing");

let index = 0;


function typeText() {

    if (index < text.length) {

        typing.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeText, 150);

    }

}


window.onload = () => {

    typeText();

};



// ================= SURPRISE BUTTON =================


const surpriseBtn = document.getElementById("surpriseBtn");


surpriseBtn.addEventListener("click", () => {


    confetti({

        particleCount: 200,

        spread: 120,

        origin: {
            y: .6
        }

    });


    document.querySelectorAll(".hidden")
        .forEach(section => {

            section.classList.add("show");

        });


    document.querySelector(".musicSection")
        .scrollIntoView({

            behavior: "smooth"

        });


});



// ================= SCROLL FADE INS =================


const sections = document.querySelectorAll(".hidden");


const observer = new IntersectionObserver(
    (entries) => {


        entries.forEach(entry => {


            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }


        });


    },
    {

        threshold: .2

    });


sections.forEach(section => {

    observer.observe(section);

});



// ================= MUSIC =================


const musicBtn = document.getElementById("musicBtn");

const song = document.getElementById("birthdaySong");


let playing = false;


musicBtn.addEventListener("click", () => {


    if (!playing) {

        song.play();

        musicBtn.innerHTML = "Pause Music 🎵";

        playing = true;

    }

    else {

        song.pause();

        musicBtn.innerHTML = "Play Music 🎵";

        playing = false;

    }


});



// ================= CANDLE =================


const cake = document.getElementById("cake");

const flame = document.getElementById("flame");


cake.addEventListener("click", () => {


    flame.classList.add("blown");


    confetti({

        particleCount: 150,

        spread: 100,

        origin: {
            y: .7
        }

    });


    launchFireworks();


});




// ================= FIREWORKS =================


function launchFireworks() {


    let duration = 3000;


    let end = Date.now() + duration;



    let interval = setInterval(() => {


        confetti({

            particleCount: 80,

            angle: 60,

            spread: 70,

            origin: {
                x: 0
            }


        });



        confetti({


            particleCount: 80,

            angle: 120,

            spread: 70,

            origin: {
                x: 1
            }


        });



        if (Date.now() > end) {

            clearInterval(interval);

        }



    }, 250);



}


// ================= BALLOON GAME =================


const gameArea = document.getElementById("gameArea");

const scoreText = document.getElementById("score");

const winMessage = document.getElementById("winMessage");


let score = 0;



function createBalloon() {


    if (score >= 21) {

        return;

    }


    const balloon = document.createElement("div");


    balloon.className = "balloon";

    balloon.innerHTML = "🎈";


    balloon.style.left =
        Math.random() * 90 + "%";


    balloon.addEventListener("click", () => {


        balloon.remove();


        score++;


        scoreText.innerHTML = score;


        confetti({

            particleCount: 30,

            spread: 50,

            origin: {
                y: .7
            }

        });


        if (score === 21) {


            winMessage.innerHTML =
                "🎉 Good job! Scroll down...";


            confetti({

                particleCount: 250,

                spread: 150

            });


        }


    });



    gameArea.appendChild(balloon);



    setTimeout(() => {

        balloon.remove();

    }, 5000);



}



setInterval(() => {


    if (score < 21) {

        createBalloon();

    }


}, 800);