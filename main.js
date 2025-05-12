// Menu JS - Show or Hinde when click icon
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = document.querySelector("i");

menuBtn.addEventListener("click", (e) =>{
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen?"ri-close-line":"ri-menu-line");
});

// Menu JS - Show or Hinden when click navLinks
navLinks.addEventListener("click", (e) =>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// Scroll HEADER
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal("nav", {
    ...scrollRevealOption,
    origin:"top"
});
ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin:"right",
    delay: 250,
});
ScrollReveal().reveal(".header__content h2", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 1000,
});

// Scroll ORDER
ScrollReveal().reveal(".order__card", {
    ...scrollRevealOption,
    interval: 500,
});

// Scroll EVENT
ScrollReveal().reveal(".event__content", {
    ...scrollRevealOption,
    duration: 1000,
});

// FORM SECTION
const scriptURL = "https://script.google.com/macros/s/AKfycbwI2TLSPmcCPPcelIoyIy1d66gfbSuIzi0PqvbDjcyV0_E41kjkMZ4Uh4LtkoNBmT10/exec"
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully. Thanks you! Our staff will call you to confirm within 15 minutes. Please keep your phone on."
        setTimeout(function() {
            msg.innerHTML = ""
        }, 15000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})


// SEND EMAIL
function emailSend(){

    Email.send({
    Host : "s1.maildns.net",
    Username : "taitd.acehomecenter.2024@gmail.com",
    Password : "EE1ECD4F466BCFF1F2BED35C46CFA0D18D71",
    To : 'taitd.acehomecenter.2024@gmail.com',
    From : "taitd.acehomecenter.2024@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}