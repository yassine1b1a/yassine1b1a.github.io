// script.js

// Function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Function to validate the login form
function validateLoginForm(event) {
    event.preventDefault(); // Prevent form submission
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    // Simulate a successful login
    alert('Login successful!');
    // Here, you can add AJAX calls to your backend for actual login processing
}

// Function to validate the signup form
function validateSignupForm(event) {
    event.preventDefault(); // Prevent form submission
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (name.trim() === '') {
        alert('Name cannot be empty.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    // Simulate a successful signup
    alert('Signup successful!');
    // Here, you can add AJAX calls to your backend for actual signup processing
}

// Attach event listeners to the forms
window.onload = function() {
    const loginForm = document.querySelector('.login-box form');
    const signupForm = document.querySelector('.signup-box form');

    if (loginForm) {
        loginForm.addEventListener('submit', validateLoginForm);
    }

    if (signupForm) {
        signupForm.addEventListener('submit', validateSignupForm);
    }
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for contacting us. We'll get back to you soon!");
});


