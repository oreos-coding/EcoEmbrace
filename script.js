function locoJs() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters,  position: fixed on mobile. 
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });


  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

}

locoJs();


var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1 h1",
    scroller: "#main",
    start: "top 27%",
    end: "top 0",
    scrub: 2
  }
});

tl.to("#page1 h1", {
  x: -100,
}, "anim");

tl.to("#page1 h2", {
  x: 100
}, "anim");

tl.to("#page1 #video-container video", {
  width: "90%"
}, "anim");




//AUDIO ENHANCEMENT
function audio(){
const audio = document.getElementById("myAudio");
function playAudio() {
  audio.play();
}
function pauseAudio() {
  audio.pause();
}

//Themes Slider Script
};
audio();


//Theme script


function themeSlider(){
// Get all the slides and the indicator container
const slides = document.querySelectorAll("#carousel-items > .carousel-slide");
const indicatorsContainer = document.getElementById("indicators");
let currentIndex = 0;

// Create indicators dynamically based on the number of slides
slides.forEach((_, index) => {
    const button = document.createElement("button");
    button.classList.add("w-4", "h-4", "bg-gray-500", "rounded-full", "hover:bg-white");
    button.dataset.index = index;
    indicatorsContainer.appendChild(button);
});

// Function to update the carousel and indicator state
function updateCarousel(index) {
    // Update slides
    slides.forEach((slide, idx) => {
        slide.classList.toggle("active", idx === index);
    });

    // Update indicators
    document.querySelectorAll("#indicators button").forEach((btn, idx) => {
        btn.classList.toggle("bg-white", idx === index);
        btn.classList.toggle("bg-gray-500", idx !== index);
    });

    // Stop any currently playing audio
    document.querySelectorAll("audio").forEach(audio => {
        audio.pause();
        audio.currentTime = 0; // Reset audio to start
    });

    // Play the audio for the current slide
    const currentAudio = document.getElementById(`audio${index + 1}`);
    currentAudio.play();
}

// Add click event for each indicator button
document.querySelectorAll("#indicators button").forEach((btn) => {
    btn.addEventListener("click", () => {
        currentIndex = parseInt(btn.dataset.index);
        updateCarousel(currentIndex);
    });
});

// Add event listeners for next and previous buttons
document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel(currentIndex);
});

document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel(currentIndex);
});

// Initialize the carousel
updateCarousel(currentIndex);

};

themeSlider();


//BLOG WEBSITE.
// Expandable Content Logic
document.querySelectorAll('.read-more').forEach(button => {
  button.addEventListener('click', () => {
    alert('This will take you to the detailed blog content.');
    // Redirect to another page or expand the article.
  });
});


