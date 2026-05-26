document.body.classList.add("has-js");

const revealItems = document.querySelectorAll(".reveal");

revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 55, 220)}ms`;
});

function showVisibleItems() {
    revealItems.forEach((item) => {
        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 20) {
            item.classList.add("is-visible");
        }
    });
}

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealItems.forEach((item) => observer.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
}

requestAnimationFrame(showVisibleItems);
window.addEventListener("load", showVisibleItems);

const contactForm = document.querySelector("[data-contact-form]");

if (contactForm) {
    const message = document.querySelector("[data-form-message]");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (message) {
            message.textContent = "Gracias. Tu mensaje quedó preparado para seguimiento.";
        }

        contactForm.reset();
    });
}
