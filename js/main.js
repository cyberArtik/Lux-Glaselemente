let eventsSlider = new Swiper(".events-swiper", {
    slidesPerView: 1,
    slidesPerGroup: 3,
    // navigation: true,
    grid: {
        rows: 1
    },
    spaceBetween: 30,
    // loop: true,
    navigation: {
        nextEl: ".events__next",
        prevEl: ".events__prev"
    },
    pagination: {
        el: '.events-swiper__pagination',
        type: 'bullets',
        clickable: true,
        // dynamicBullets: 3
        dynamicMainBullets: 1
    },

    breakpoints: {
        120: {
            slidesPerView: 1,
            grid: {
                rows: 1
            },
            spaceBetween: 0,
            slidesPerGroup: 1

        },
        600: {
            slidesPerView: 2,
            grid: {
                rows: 1
            },
            spaceBetween: 30,
            slidesPerGroup: 2
        },

        800: {
            slidesPerView: 3,
            grid: {
                rows: 1
            },
            spaceBetween: 30,
            // slidesPerGroup: 2
        },
        1200: {
            slidesPerView: 3,
            grid: {
                rows: 1
            },
            spaceBetween: 50,
        }
    },

    a11y: {
        prevSlideMessage: 'Предыдущие слайды',
        nextSlideMessage: 'Следующие слайды',
        firstSlideMessage: 'Предыдущие слайды',
        lastSlideMessage: 'Следующие слайды',
    }
});


const links = document.querySelectorAll("a");

// Loop through the links and add a click event listener to each one
links.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        // Get the target section by its id
        const targetSection = document.querySelector(this.getAttribute("href"));

        // Scroll to the target section smoothly
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});


const sliderImgs = document.querySelectorAll(".events-swiper__img");
const sliderWraps = document.querySelectorAll(".events-img__wrraper");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-img");
const closeBtn = document.querySelector(".close-btn");




sliderImgs.forEach(sliderImg => {
    sliderImg.addEventListener("click", event => {
        modal.style.display = "block";
        modalImg.src = sliderImg.dataset.modalImg;
    });
});

closeBtn.addEventListener("click", event => {
    modal.style.display = "none";
});

modal.addEventListener("click", event => {
    modal.style.display = "none";
});

// Burger

let burger = document.querySelector('.navbar__burger');
let menu = document.querySelector('.navbar__menu');
let menuForLinks = document.querySelector('.navbar-nav')
let menuLinks = menuForLinks.querySelectorAll('.navbar__links')
burger.addEventListener('click', function() {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('navbar__menu--active');

    document.body.classList.toggle('stop-scroll');
})


menuLinks.forEach(function(el){
    el.addEventListener('click', function() {
        burger.classList.remove('burger--active');
        menu.classList.remove('navbar__menu--active');
        document.body.classList.remove('stop-scroll');
    })
})
