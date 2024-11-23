// Function to get a personalized greeting based on time of day
window.onload = function() {
    const hour = new Date().getHours();
    const greetingElement = document.querySelector('.hero h1');

    if (hour < 12) {
        greetingElement.textContent = "Good Morning, Take the First Step to Wellness";
    } else if (hour < 18) {
        greetingElement.textContent = "Good Afternoon, Take the First Step to Wellness";
    } else {
        greetingElement.textContent = "Good Evening, Take the First Step to Wellness";
    }
};

// Smooth scroll to anchor links with animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});

// Form Validation for SignUp Form
const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', function(event) {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  let errorMessages = [];

  if (!name || name.trim() === "") {
    errorMessages.push("Name is required.");
  }
  if (!email || !validateEmail(email)) {
    errorMessages.push("A valid email is required.");
  }
  if (!password || password.length < 6) {
    errorMessages.push("Password must be at least 6 characters long.");
  }

  if (errorMessages.length > 0) {
    event.preventDefault();
    alert(errorMessages.join("\n"));
  } else {
    alert("Thanks for signing up! We will contact you shortly.");
  }
});

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(email);
}

// Light/Dark Mode Toggle
const toggleMode = document.getElementById('mode-toggle');
toggleMode.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleMode.textContent = "Switch to Light Mode";
    } else {
        toggleMode.textContent = "Switch to Dark Mode";
    }
});
