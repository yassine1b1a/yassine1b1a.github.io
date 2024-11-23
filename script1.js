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
// Signup Form Validation
document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (name && email && password) {
    alert('Welcome to Mental Wellness, ' + name + '! You have successfully signed up.');
    window.location.href = 'index.html';
  } else {
    alert('Please fill in all fields.');
  }
});
