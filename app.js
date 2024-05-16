const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const animationObserver = new IntersectionObserver((elements) => {
    elements.forEach((element) => {
        console.log(element)
        if (element.isIntersecting) {
            element.target.classList.add('animate');
        }
    });
});

const animatableElements = document.querySelectorAll('.animatable');
animatableElements.forEach((el) => animationObserver.observe(el));
