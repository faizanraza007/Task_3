document.addEventListener("DOMContentLoaded", () => {
  // Form validation
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
      alert('All fields are required.');
      return;
    }

    // Simple email validation
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    alert('Form submitted successfully!');
    form.reset();
  });

  // Interactive menu
  const menuItems = document.querySelectorAll('nav ul li a');
  menuItems.forEach(item => {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    });
  });
});