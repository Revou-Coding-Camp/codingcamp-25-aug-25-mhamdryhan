const welcome = document.getElementById('welcome');
let name = prompt("Enter your name:");
welcome.innerText = `Hi ${name || "Guest"}, Welcome to NIS GROUP`;

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nameVal = document.getElementById('name').value.trim();
    const birthDateVal = document.getElementById('birthDate').value;
    const genderVal = document.querySelector('input[name="gender"]:checked');
    const msgVal = document.getElementById('messageInput').value.trim();

    if (!nameVal || !birthDateVal || !genderVal || !msgVal) {
        alert('Please fill in all fields!');
        return;
    }

    const currentTime = new Date().toLocaleString('en-GB', {
        timeZone: 'Asia/Jakarta'
    });

    document.getElementById('result').innerHTML = `
    <p><strong>Current time:</strong> ${currentTime}</p>
    <br>
    <p><strong>Nama:</strong> ${nameVal}</p>
    <p><strong>Tanggal Lahir:</strong> ${birthDateVal}</p>
    <p><strong>Jenis Kelamin:</strong> ${genderVal.value}</p>
    <p><strong>Pesan:</strong> ${msgVal}</p>
  `;

    document.getElementById('contactForm').reset();
});

function revealElements() {
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
}

document.addEventListener('DOMContentLoaded', revealElements);
window.addEventListener('scroll', revealElements);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView();
    });
});