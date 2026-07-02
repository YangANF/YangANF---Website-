document.addEventListener("DOMContentLoaded", () => {

  const button = document.querySelector(".button");

  button.addEventListener("click", () => {
    button.textContent = "WELCOME TO ANF";
    setTimeout(() => {
      button.textContent = "ENTER THE MOVEMENT";
    }, 2000);
  });

  const links = document.querySelectorAll("section a");

  links.forEach(link => {
    link.addEventListener("mouseenter", () => {
      link.style.transform = "scale(1.05)";
    });

    link.addEventListener("mouseleave", () => {
      link.style.transform = "scale(1)";
    });
  });

});
