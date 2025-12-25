document.getElementById("contactForm").addEventListener("submit", function(e) {
  const email = document.getElementById("email").value;

  if (!email.includes("@")) {
    alert("Введите корректный email");
    e.preventDefault();
  }
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});
