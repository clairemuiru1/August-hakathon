const words = [
    "a Full-stack Web Developer",
    "a Software Engineer",
    "a Tech Enthusiast",
    "a Lifelong Learner"
  ];
  
  let currentWordIndex = 0;
  let displayedText = "";
  let isDeleting = false;
  const typingSpeed = 150;
  
  function typeEffect() {
    const currentWord = words[currentWordIndex];
  
    if (isDeleting) {
      displayedText = currentWord.substring(0, displayedText.length - 1);
    } else {
      displayedText = currentWord.substring(0, displayedText.length + 1);
    }
  
    document.getElementById("dynamicText").textContent = displayedText;
  
    if (!isDeleting && displayedText === currentWord) {
      setTimeout(() => (isDeleting = true), 1000); // Pause at the end of the word
    } else if (isDeleting && displayedText === "") {
      isDeleting = false;
      currentWordIndex = (currentWordIndex + 1) % words.length;
    }
  
    setTimeout(typeEffect, isDeleting ? 100 : typingSpeed);
  }
  
  document.addEventListener("DOMContentLoaded", typeEffect);
  

  