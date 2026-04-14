const mode = document.querySelectorAll(".fa-regular");
const lightMode = document.querySelector(".fa-sun");
const darkMode = document.querySelector(".fa-moon");
const html = document.documentElement;

//read from the localstorage
const savedMode = localStorage.getItem("mode");

mode.forEach((b) => { b.classList.remove("active") });

if (savedMode === "dark") {
    html.classList.add("dark");
    lightMode.classList.add("active");
} else {
    html.classList.remove("dark");
    darkMode.classList.add("active");

}

//change the mode of the site

mode.forEach((btn) => {
    btn.addEventListener("click", function () {
        // remove active from all 
        mode.forEach((b) => { b.classList.remove("active") });
        // add active to the current
        btn.classList.add("active");

        //change the class of the html to add dark or no
        if (btn.classList.contains("fa-sun")) {
            html.classList.add("dark");
            localStorage.setItem("mode", "dark");
        } else {
            html.classList.remove("dark");
            localStorage.setItem("mode", "light");
        }
    });
});
// ==================================================
// puase btn for the slider
const pauseBtn = document.querySelectorAll(".pBtn");
const moving = document.querySelector(".animate-move");

pauseBtn.forEach((btn) => {
    btn.addEventListener("click", function () {

        // if the mode is play
        if (btn.classList.contains("fa-pause")) {

            // remove active from all 
            pauseBtn.forEach((b) => { b.classList.remove("active") });

            //active the pause btn
            document.querySelector(".fa-play").classList.add("active");

            // pausing the animation
            moving.classList.add("paused");
        }
        else {
            // remove active from all 
            pauseBtn.forEach((b) => { b.classList.remove("active") });

            //active the play btn
            document.querySelector(".fa-pause").classList.add("active");

            // playing the animation
            moving.classList.remove("paused");
        }
    })
});

// =========================================================
// visible the videos when we click on the card 

const cards = document.querySelectorAll(".box");
const Close = document.querySelectorAll(".close");
const vid1 = document.querySelector(".vid1");
const vid2 = document.querySelector(".vid2");
const video1 = document.querySelector(".vid1 video");
const video2 = document.querySelector(".vid2 video");

// view the vid of the first card
cards[0].addEventListener("click", function () {

    // make the video container visile
    vid1.style.opacity = "1";

    // play the sound of the video
    video1.muted = false;
    video1.play();

    //stop scrolling or any interaction with the body
    document.body.style.overflow = "hidden";
    document.body.style.pointerEvents = "none";
    vid1.style.pointerEvents = "auto";
});

// close this video
Close[0].addEventListener("click", function () {

    // make the video container visile
    vid1.style.opacity = "0";

    // play the sound of the video
    video1.muted = true;

    //stop scrolling or any interaction with the body
    document.body.style.overflow = "auto";
    document.body.style.pointerEvents = "auto";
    vid1.style.pointerEvents = "none";
});


//open the video 2 
cards[1].addEventListener("click", function () {

    // make the video container visile
    vid2.style.opacity = "1";

    // play the sound of the video
    video2.muted = false;
    video2.play();

    //stop scrolling or any interaction with the body
    document.body.style.overflow = "hidden";
    document.body.style.pointerEvents = "none";
    vid2.style.pointerEvents = "auto";
});

Close[1].addEventListener("click", function () {

    // make the video container visile
    vid2.style.opacity = "0";

    // play the sound of the video
    video2.muted = true;

    //stop scrolling or any interaction with the body
    document.body.style.overflow = "auto";
    document.body.style.pointerEvents = "auto";
    vid2.style.pointerEvents = "none";
});
// ==================================================================
// move the cards when press on the btn
const leftM = document.querySelector(".leftMove");
const rightM = document.querySelector(".rightMove");
const cardsContainer = document.querySelector(".testimonial");

rightM.addEventListener("click", function () {
    cardsContainer.scrollBy({
        left: 820,
        behavior: "smooth"
    });
});

leftM.addEventListener("click", function () {
    cardsContainer.scrollBy({
        left: -820,
        behavior: "smooth"
    })
})