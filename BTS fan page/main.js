/* toggle icon navbar */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  //   on click toggle activation
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/* scroll action active line */
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });

      //   after clicking a navlink it's close the toggle
      menuIcon.classList.remove("bx-x");
      navbar.classList.remove("active");

      // let activeNavLink = document.querySelector(
      //   "header nav a[href='#" + id + "']"
      // );
      // if (activeNavLink) {
      //   activeNavLink.classList.add("active");
      // }
    }
  });
};
