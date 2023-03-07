const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.menu a');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Handle routing when the user clicks on a link in the navbar
var navLinks = document.querySelectorAll('nav a');

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function(e) {
    e.preventDefault();

    var targetId = this.getAttribute('href');
    var targetSection = document.querySelector(targetId);

    // Scroll to the target section using smooth scrolling
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
}

links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    const href = link.getAttribute('href');

    if (href.startsWith('#') & href.startsWith('.')) {
      const id = href.substring(1);
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    } else {
      window.location.href = href;
    }
  });
});

// const homeText = document.querySelector('.home p');
// const homeTextContent = homeText.textContent;
// homeText.textContent = '';

// let i = 0;

// function typeWriter() {
//   if (i < homeTextContent.length) {
//     homeText.textContent += homeTextContent.charAt(i);
//     i++;
//     setTimeout(typeWriter, 50);
//   } else {
//     setTimeout(() => {
//       homeText.textContent = '';
//       i = 0;
//       typeWriter();
//     }, 2000);
//   }
// }

// setTimeout(typeWriter, 2000);

const texts = ["Hi, I'm Awf Bobber", "I'm B.tech Artificial Intelligence and Machine Learning Student"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector("#typewriter").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 150);
}());


const form = document.querySelector('.contact form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nameInput = form.querySelector('#name');
  const emailInput = form.querySelector('#email');
  const messageInput = form.querySelector('#message');

  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  const data = {
    name,
    email,
    message
  };

  console.log(data);

  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
});

