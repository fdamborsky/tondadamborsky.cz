document.querySelectorAll('.box').forEach(box => {
    const hoverElement = box.querySelector('.box_hover');

    box.addEventListener('mouseover', () => {
        hoverElement.style.transition = 'opacity 0.25s linear, visibility 0.5s linear';
        hoverElement.style.opacity = '1';
        hoverElement.style.visibility = 'visible';
    });

    box.addEventListener('mouseout', () => {
        hoverElement.style.transition = 'opacity 0.25s linear, visibility 0.5s linear';
        hoverElement.style.opacity = '0';
        hoverElement.style.visibility = 'hidden';
    });
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden") 
hiddenElements.forEach((el) => observer.observe(el))


document.querySelectorAll(".image img").forEach(image => {
    image.onclick = () => {
        document.querySelector(".popup-image").style.display = "block"  
        document.querySelector(".mainImage").src = image.getAttribute("src")
    }
})

document.querySelector(".popup-image span").onclick = () =>{
    document.querySelector(".popup-image").style.display = "none";
}


