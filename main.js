var preloader = document.getElementsByClassName("preloader")[0];
console.log(preloader);

var header = document.getElementsByClassName("header")[0];

var offers = document.getElementsByClassName("offers__item");
var hero_animations = document.getElementsByClassName("hero_animation");

window.onload = function () {
  setTimeout(function () {
    preloader.style.transition = "opacity 300ms";
    preloader.style.opacity = 0;

    setTimeout(function () {
      preloader.style.display = "none";
    }, 400);
  }, 1000);
  hero_animations[0].style.animation = "fade_SIDE_FIRST 1.5s forwards";
  hero_animations[1].style.animation = "fade_SIDE_FIRST 1.5s .4s forwards";
  hero_animations[2].style.animation = "fade_SIDE_FIRST 1.5s .5s forwards";
};

window.onscroll = function () {
  if (scrollY >= 450) {
    header.classList.add("fixed-bar");
    offers[0].style.animation = "fadeInUp 1.5s forwards";
    offers[1].style.animation = "fadeInUp 1.5s .4s forwards";
    offers[2].style.animation = "fadeInUp 1.5s .8s forwards";
  } else {
    header.classList.remove("fixed-bar");
  }
};
/*
const testimonials = [
  {
    text: "Brook presents your services with flexible, convenient and compose layouts. You can select your favorite layouts & elements with unlimited customization possibilities. Pixel-perfect replication of their designers’ intent.",
    name: "Robart Brown",
    title: "Creative designer at Colorlib",
    img: "Images/testimonial.png",
  },
  {
    text: "Excellent platform! It made our design process smoother and helped us deliver faster. Highly recommended for any creative team looking to optimize workflow.",
    name: "Linda Carter",
    title: "UX Specialist at Dribble",
    img: "Images/testimonial.png",
  },
];

let currentIndex = 0;

const textEl = document.getElementById("testimonial-text");
const nameEl = document.getElementById("author-name");
const titleEl = document.getElementById("author-title");
const imgEl = document.getElementById("author-img");
const pageIndicator = document.getElementById("page-indicator");

function renderTestimonial(index) {
  const t = testimonials[index];
  textEl.textContent = t.text;
  nameEl.textContent = t.name;
  titleEl.textContent = t.title;
  imgEl.src = t.img;
  pageIndicator.textContent = index + 1;
}

renderTestimonial(currentIndex);

document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  renderTestimonial(currentIndex);
});

document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  renderTestimonial(currentIndex);
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  renderTestimonial(currentIndex);
}, 2000);
*/
