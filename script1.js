// Contact form submission logic
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for contacting us!');
});

// Sign-up form validation
document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
    } else {
        alert('Sign-up successful!');
    }
});
