// =========================================
// NIFARYDEV PORTFOLIO WEBSITE
// MODERN JAVASCRIPT
// =========================================

console.log("🚀 NifaryDev Portfolio Loaded");

/* =========================================
   WEBSITE LOADING
========================================= */

window.addEventListener("load", () => {

  document.body.style.opacity = "0";

  setTimeout(() => {

    document.body.style.transition = "1s";

    document.body.style.opacity = "1";

  }, 200);

});

/* =========================================
   WELCOME ALERT
========================================= */

setTimeout(() => {

  alert("Welcome To NifaryDev Portfolio 👋");

}, 700);

/* =========================================
   CURRENT YEAR
========================================= */

const currentYear = new Date().getFullYear();

console.log("📅 Current Year :", currentYear);

/* =========================================
   HERO TEXT ANIMATION
========================================= */

const heroText = document.querySelector(".hero-text");

if(heroText){

  heroText.style.opacity = "0";

  heroText.style.transform = "translateY(40px)";

  setTimeout(() => {

    heroText.style.transition = "1.2s";

    heroText.style.opacity = "1";

    heroText.style.transform = "translateY(0px)";

  }, 400);

}

/* =========================================
   HERO IMAGE ANIMATION
========================================= */

const heroImage = document.querySelector(".hero-image");

if(heroImage){

  heroImage.style.opacity = "0";

  heroImage.style.transform = "translateX(-80px)";

  setTimeout(() => {

    heroImage.style.transition = "1.2s";

    heroImage.style.opacity = "1";

    heroImage.style.transform = "translateX(0px)";

  }, 400);

}

/* =========================================
   PROFILE IMAGE EFFECT
========================================= */

const profileImage = document.querySelector(".hero-image img");

if(profileImage){

  profileImage.addEventListener("mouseenter", () => {

    profileImage.style.transform =
    "scale(1.06) rotate(2deg)";

  });

  profileImage.addEventListener("mouseleave", () => {

    profileImage.style.transform =
    "scale(1) rotate(0deg)";

  });

}

/* =========================================
   BUTTON EFFECT
========================================= */

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {

  button.addEventListener("mouseenter", () => {

    button.style.transform =
    "translateY(-12px) scale(1.07)";

    button.style.boxShadow =
    "0 15px 25px rgba(0,0,0,0.15)";

  });

  button.addEventListener("mouseleave", () => {

    button.style.transform =
    "translateY(0px) scale(1)";

    button.style.boxShadow =
    "0 8px 20px rgba(0,0,0,0.12)";

  });

});

/* =========================================
   NAVBAR EFFECT
========================================= */

window.addEventListener("scroll", () => {

  const header = document.querySelector("header");

  if(window.scrollY > 50){

    header.style.background =
    "rgba(255,255,255,0.98)";

    header.style.boxShadow =
    "0 5px 20px rgba(0,0,0,0.08)";

    header.style.padding =
    "20px 10%";

  }else{

    header.style.background =
    "rgba(255,255,255,0.95)";

    header.style.boxShadow =
    "0 2px 10px rgba(0,0,0,0.05)";

    header.style.padding =
    "25px 10%";

  }

});

/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(
  ".box, .card, .contact-card"
);

window.addEventListener("scroll", revealOnScroll);

function revealOnScroll(){

  revealElements.forEach((element) => {

    const windowHeight = window.innerHeight;

    const revealTop =
    element.getBoundingClientRect().top;

    const revealPoint = 100;

    if(revealTop < windowHeight - revealPoint){

      element.style.opacity = "1";

      element.style.transform =
      "translateY(0px)";

    }

  });

}

/* INITIAL STYLE */

revealElements.forEach((element) => {

  element.style.opacity = "0";

  element.style.transform =
  "translateY(60px)";

  element.style.transition =
  "0.9s";

});

/* =========================================
   TYPEWRITER EFFECT
========================================= */

const title = document.querySelector(".name");

if(title){

  const text = title.innerHTML;

  title.innerHTML = "";

  let i = 0;

  function typingEffect(){

    if(i < text.length){

      title.innerHTML += text.charAt(i);

      i++;

      setTimeout(typingEffect, 120);

    }

  }

  typingEffect();

}

/* =========================================
   SKILL CARD EFFECT
========================================= */

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

  card.addEventListener("mouseenter", () => {

    card.style.transform =
    "scale(1.06)";

    card.style.boxShadow =
    "0 15px 30px rgba(0,0,0,0.12)";

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform =
    "scale(1)";

    card.style.boxShadow =
    "0 8px 20px rgba(0,0,0,0.08)";

  });

});

/* =========================================
   CONTACT CARD EFFECT
========================================= */

const contactCards =
document.querySelectorAll(".contact-card");

contactCards.forEach((card) => {

  card.addEventListener("mouseenter", () => {

    card.style.transform =
    "translateY(-12px)";

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform =
    "translateY(0px)";

  });

});

/* =========================================
   CERTIFICATE EFFECT
========================================= */

const certificates =
document.querySelectorAll(".sertifikat img");

certificates.forEach((image) => {

  image.addEventListener("mouseenter", () => {

    image.style.transform =
    "scale(1.03)";

  });

  image.addEventListener("mouseleave", () => {

    image.style.transform =
    "scale(1)";

  });

});

/* =========================================
   MOUSE MOVE EFFECT
========================================= */

document.addEventListener("mousemove", (e) => {

  const x = e.clientX / 30;

  const y = e.clientY / 30;

  if(profileImage){

    profileImage.style.boxShadow =
    `${x}px ${y}px 30px rgba(0,0,0,0.15)`;

  }

});

/* =========================================
   SCROLL TOP BUTTON
========================================= */

const scrollButton =
document.createElement("button");

scrollButton.innerHTML = "↑";

document.body.appendChild(scrollButton);

scrollButton.style.position = "fixed";

scrollButton.style.bottom = "30px";

scrollButton.style.right = "30px";

scrollButton.style.width = "50px";

scrollButton.style.height = "50px";

scrollButton.style.border = "none";

scrollButton.style.borderRadius = "50%";

scrollButton.style.background = "#f4b400";

scrollButton.style.color = "white";

scrollButton.style.fontSize = "22px";

scrollButton.style.cursor = "pointer";

scrollButton.style.boxShadow =
"0 5px 15px rgba(0,0,0,0.2)";

scrollButton.style.display = "none";

scrollButton.style.zIndex = "999";

/* SHOW BUTTON */

window.addEventListener("scroll", () => {

  if(window.scrollY > 300){

    scrollButton.style.display = "block";

  }else{

    scrollButton.style.display = "none";

  }

});

/* SCROLL TO TOP */

scrollButton.addEventListener("click", () => {

  window.scrollTo({

    top: 0,

    behavior: "smooth"

  });

});

/* =========================================
   DARK MODE
========================================= */

document.addEventListener("keydown", (e) => {

  if(e.key === "d"){

    document.body.classList.toggle("dark-mode");

  }

});

/* DARK MODE STYLE */

const style = document.createElement("style");

style.innerHTML = `

.dark-mode{

  background: #111;

  color: white;
}

.dark-mode header{

  background: #1a1a1a;
}

.dark-mode .box,
.dark-mode .card,
.dark-mode .contact-card{

  background: #1f1f1f;

  color: white;
}

.dark-mode p,
.dark-mode h1,
.dark-mode h2,
.dark-mode h3,
.dark-mode h4,
.dark-mode a{

  color: white;
}

`;

document.head.appendChild(style);

/* =========================================
   ONLINE STATUS
========================================= */

window.addEventListener("online", () => {

  console.log("✅ Internet Connected");

});

window.addEventListener("offline", () => {

  console.log("❌ Internet Disconnected");

});

/* =========================================
   FINAL MESSAGE
========================================= */

console.log(
  "🔥 NifaryDev Portfolio Ready Successfully"
);