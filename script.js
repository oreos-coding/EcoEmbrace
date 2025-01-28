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


function animalSlider(){
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  
  const slider = document.querySelector(".video-container");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  if (slider && prevBtn && nextBtn) {
    console.log("Elements found!");
  } else {
    console.error("Error: Elements not found!");
  }

  let scrollAmount = 0;

  prevBtn.addEventListener("click", () => {
    console.log("Previous button clicked");
    scrollAmount -= slider.offsetWidth;
    if (scrollAmount < 0) scrollAmount = 0;
    slider.style.transform = `translateX(-${scrollAmount}px)`;
  });

  nextBtn.addEventListener("click", () => {
    console.log("Next button clicked");
    scrollAmount += slider.offsetWidth;
    const maxScroll = slider.scrollWidth - slider.offsetWidth;
    if (scrollAmount > maxScroll) scrollAmount = maxScroll;
    slider.style.transform = `translateX(-${scrollAmount}px)`;
  });
});
};
animalSlider();

//AUDIO ENHANCEMENT
function audio() {
  const audio = document.getElementById("myAudio");
  function playAudio() {
    audio.play();
  }
  function pauseAudio() {
    audio.pause();
  }

  
};
audio();


//BLOG WEBSITE.
function blogButton(){
  document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
      alert('This will take you to the detailed blog content.');
      
    });
  });
  };
blogButton();


function blogQuiz(){

const questions = [
  {
    question: "What is the largest rainforest in the world?",
    options: ["Amazon Rainforest", "Congo Rainforest", "Daintree Rainforest", "Sumatran Rainforest"],
    correct: 0, // Index 
  },
  {
    question: "Which tree is known as the 'Tree of Life'?",
    options: ["Oak Tree", "Baobab Tree", "Maple Tree", "Redwood Tree"],
    correct: 1,
  },
  {
    question: "Which natural element is most essential for plant growth?",
    options: ["Water", "Sunlight", "Nitrogen", "All of the above"],
    correct: 3,
  },
  {
    question: "Which is the tallest mountain in the world?",
    options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
    correct: 0,
  },
  {
    question: "Which of these animals is a keystone species?",
    options: ["Elephant", "Tiger", "Beaver", "All of the above"],
    correct: 3,
  },
];

let currentQuestion = 0;
let score = 0;

const quizContent = document.getElementById("quiz-content");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function loadQuestion(index) {
  const questionData = questions[index];

  if (!questionData) {
    console.error("Question data not found for index:", index);
    return;
  }

  quizContent.innerHTML = `
    <p class="question">${questionData.question}</p>
    <div class="options">
      ${questionData.options
        .map(
          (option, i) => `
        <label>
          <input type="radio" name="question${index}" value="${i}"> ${option}
        </label>
      `
        )
        .join("")}
    </div>
  `;

  prevBtn.style.display = index === 0 ? "none" : "inline-block";
  nextBtn.textContent = index === questions.length - 1 ? "Submit" : "Next ❯";
}

function checkAnswer(index) {
  const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
  if (selectedOption) {
    const answer = parseInt(selectedOption.value, 10);
    if (answer === questions[index].correct) {
      score++;
    }
  }
}

nextBtn.addEventListener("click", () => {
  
  checkAnswer(currentQuestion);

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion(currentQuestion);
  } else {
  
    quizContent.innerHTML = `
      <h3>Your Result</h3>
      <p>You scored ${score} out of ${questions.length}!</p>
      <p>${getNatureCategory(score)}</p>
    `;
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
  }
});

prevBtn.addEventListener("click", () => {
  
  currentQuestion--;
  loadQuestion(currentQuestion);
});

//  function to determine nature personality
function getNatureCategory(score) {
  const percentage = (score / questions.length) * 100;

  if (percentage >= 80) {
    return "Nature Explorer: You’re deeply connected to the natural world!";
  } else if (percentage >= 60) {
    return "Nature Enthusiast: You enjoy and appreciate nature regularly.";
  } else if (percentage >= 40) {
    return "Nature Learner: You’re curious about nature but have more to discover.";
  } else {
    return "Nature Newbie: Start exploring the wonders of nature!";
  }
}

loadQuestion(currentQuestion);
};

blogQuiz();