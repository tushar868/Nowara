'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when click on any navbar link
 */

for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

/**
 * addd event on all elements for toggling navbar
 */

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}



/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400 ? header.classList.add("active")
    : header.classList.remove("active");
}); 


/**
 * add active class on header & back to top button
 */


const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); // Add the 'visible' class when in view
        observer.unobserve(entry.target);     // Stop observing once animated
      }
    });
  }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

  elements.forEach(element => observer.observe(element));
});

window.addEventListener('load', () => {
  const aminitiesList = document.querySelector('.aminities-list');

  const scrollInterval = setInterval(() => {
    const cardWidth = aminitiesList.querySelector('li').offsetWidth + 20; // Get the width of each card + margin
    aminitiesList.scrollBy({
      left: cardWidth, // Scroll by one card's width
      behavior: 'smooth',
    });
  }, 3000); // Scroll every 3 seconds

  aminitiesList.addEventListener('transitionend', () => {
    // Reset the scroll position to 0 when it reaches the end to create the infinite loop effect
    if (aminitiesList.scrollLeft >= aminitiesList.scrollWidth - aminitiesList.offsetWidth) {
      aminitiesList.scrollLeft = 0;
    }
  });
});





document.addEventListener('DOMContentLoaded', function() {
  const floatingBtn = document.querySelector('.floating-btn');
  const popupForm = document.querySelector('.popup-form');
  const closeBtn = document.querySelector('.close-btn');

  // Open the form when the floating button is clicked
  floatingBtn.addEventListener('click', function() {
      // Add active class to trigger animations
      floatingBtn.classList.add('active');
      popupForm.classList.add('active');
  });

  // Close the form when the close button is clicked
  closeBtn.addEventListener('click', function() {
      // Remove active class to hide the form and button
      floatingBtn.classList.remove('active');
      popupForm.classList.remove('active');
  });
});

const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all
      faqItems.forEach(el => el.classList.remove('active'));

      // If not already active, open it
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

const popup = document.getElementById("popup");
        const agreeBtn = document.getElementById("agreeBtn");

        // Check if popup was shown in this session
        if (!sessionStorage.getItem("popupShown")) {
            popup.classList.remove("hidden"); // Show popup
        }

        // When user clicks "I Agree", hide popup and store session flag
        agreeBtn.addEventListener("click", () => {
            popup.classList.add("hidden");
            sessionStorage.setItem("popupShown", "true"); // Store session variable
        });


