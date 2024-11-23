// Ensure DOM is loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
    console.log("script1.js is connected!");

    // Handle the form submission on the contact form (index.html)
    const contactForm = document.querySelector("#contact form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevent default submission
            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();

            if (validateEmail(email) && name !== "") {
                alert(`Thank you, ${name}! We will contact you at ${email}.`);
                contactForm.reset(); // Clear the form
            } else {
                alert("Please fill out the form correctly!");
            }
        });
    }

    // Handle the form submission on the signup form (signup.html)
    const signupForm = document.querySelector("#signup-form form");
    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevent default submission
            const username = document.querySelector("#username").value.trim();
            const email = document.querySelector("#email").value.trim();
            const password = document.querySelector("#password").value;
            const confirmPassword = document.querySelector("#confirm-password").value;

            if (validateSignupForm(username, email, password, confirmPassword)) {
                alert(`Welcome, ${username}! Your account has been created.`);
                signupForm.reset(); // Clear the form
            }
        });
    }

    // Email validation function
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Sign-up form validation
    function validateSignupForm(username, email, password, confirmPassword) {
        if (username === "") {
            alert("Username is required!");
            return false;
        }
        if (!validateEmail(email)) {
            alert("Please enter a valid email address!");
            return false;
        }
        if (password.length < 6) {
            alert("Password must be at least 6 characters long!");
            return false;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return false;
        }
        return true;
    }

    // Example feature: Highlight nav links on hover
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach((link) => {
        link.addEventListener("mouseenter", () => {
            link.style.color = "red"; // Highlight on hover
        });
        link.addEventListener("mouseleave", () => {
            link.style.color = ""; // Reset color on mouse leave
        });
    });
});
