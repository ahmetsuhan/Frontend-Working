const sliderLeftButton = document.querySelector(".js-arrow-left");
const sliderRightButton = document.querySelector(".js-arrow-right");
let sliderImage = document.querySelector(".card-image");
let sliderInterval;
const sliderSettings = [{
        images: [
            { src: "https://images.unsplash.com/photo-1564604761388-83eafc96f668?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=801.2.1&auto=format&fit=crop&w=2167&q=80" },
            { src: "https://images.unsplash.com/photo-1482192505345-5655af888cc4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2600&q=80" },
            {
                src: "https://images.unsplash.com/photo-1491900177661-4e1cd2d7cce2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
            }, {
                src: "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80"
            }
        ]
    },
    {
        animation: {
            duration: 2000,
            random: true
        }
    },
    {
        counter: 0
    },

]


const ShowSlide = () => {
    sliderImage.setAttribute("src", sliderSettings[0].images[sliderSettings[2].counter].src);
}

const RandomGenerator = (end) => {
    return Math.floor(Math.random() * end);
}



const LoadScreen = () => {
    sliderImage.setAttribute("src", sliderSettings[0].images[0].src);
    StartSliderInterval();
}


const SlideRandomly = () => {
    let randomNumber;
    if (sliderSettings[1].animation.random) {
        randomNumber = RandomGenerator(sliderSettings[0].images.length);
        sliderSettings[2].counter = randomNumber;
        ShowSlide();
    }
}
const StartSliderInterval = () => {
    sliderInterval = setInterval(SlideRandomly, sliderSettings[1].animation.duration);
}
const StopSliderInterval = () => {
    clearInterval(sliderInterval);
}

const SliderPrev = () => {
    sliderSettings[2].counter--;

    if (sliderSettings[2].counter <= 0) {
        sliderSettings[2].counter = sliderSettings[0].images.length - 1;
    }
    ShowSlide();
}
const SliderNext = () => {
    sliderSettings[2].counter++;

    if (sliderSettings[2].counter >= sliderSettings[0].images.length) {
        sliderSettings[2].counter = 0;
    }
    ShowSlide();
}
const EventListener = () => {
    sliderLeftButton.addEventListener("click", SliderPrev);
    sliderRightButton.addEventListener("click", SliderNext);

    document.querySelector(".card").addEventListener("mouseenter", StopSliderInterval);

    document.querySelector(".card").addEventListener("mouseleave", StartSliderInterval);
}



LoadScreen();
EventListener();