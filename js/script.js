// Dynamic Welcome Message
const welcome = document.getElementById('welcome');
let name = prompt("Enter your name:");
welcome.innerText = `Hi ${name || "Guest"}, Welcome to Website`;

// Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const nameVal = document.getElementById('name').value.trim();
  const emailVal = document.getElementById('email').value.trim();
  const phoneVal = document.getElementById('phone').value.trim();
  const msgVal = document.getElementById('messageInput').value.trim();

  if (!nameVal || !emailVal || !phoneVal || !msgVal) {
    alert('Please fill in all fields!');
    return;
  }

  document.getElementById('result').innerHTML = `
    <p>Thank you, <strong>${nameVal}</strong>! Your message has been sent.</p>
    <p>Email: ${emailVal}</p>
    <p>Phone: ${phoneVal}</p>
    <p>Message: ${msgVal}</p>
  `;
});

// Scroll Animation
window.addEventListener('scroll', () => {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(reveal => {
    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add('active');
    } else {
      reveal.classList.remove('active');
    }
  });
});