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

// Smooth scroll to anchor links with animati

// Form Validation for SignUp Form
// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Signup Form Validation
const signupForm = document.getElementById('signup-form');
const formMessage = document.getElementById('form-message');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!name || !email || !password) {
    formMessage.textContent = 'Please fill in all fields!';
    formMessage.style.color = 'red';
  } else {
    formMessage.textContent = 'Success! You are signed up.';
    formMessage.style.color = 'green';
  }
});

// Contact Form Validation
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const contactName = document.getElementById('contact-name').value.trim();
  const contactEmail = document.getElementById('contact-email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!contactName || !contactEmail || !message) {
    contactMessage.textContent = 'All fields are required!';
    contactMessage.style.color = 'red';
  } else {
    contactMessage.textContent = 'Your message has been sent!';
    contactMessage.style.color = 'green';
  }
});
