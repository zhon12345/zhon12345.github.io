const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Display Mobile Menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    navLinks.classList.toggle('is-active');
})

// Close Mobile Menu when nav links is clicked
document.querySelectorAll('.nav-link').forEach(n => {
    n.addEventListener('click', () => {
        hamburger.classList.remove('is-active');
        navLinks.classList.remove('is-active');
    });
});

// Generate Project Cards with data in data.js
function generateProjects() {
    const projectContainer = document.querySelector(".projects-container");
    projectContainer.innerHTML = projects.map(project => {
        return `
        <div class="projects-card">
            <div class="card-content">
                <img src="${project.thumbnail}" alt="${project.name} Preview" width="245px" loading="lazy" draggable="false" />
                
                <h2>${project.name}</h2>
                <p>${project.description}</p>
                
                <div class="projects-btn">
                     <div ${project.url1 === '#' ? 'class="button-1 disabled"' : 'class="button-1"'}>
                        <a href="${project.url1}" target="_blank" draggable="false" >
                            <button>${project.label1}</button>
                        </a>
                    </div>
                    <div ${project.url2 === '#' ? 'class="button-2 disabled"' : 'class="button-2"'}>
                        <a href="${project.url2}" target="_blank" draggable="false" >
                            <button>${project.label2}</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>`
    }).join("");
};


// Makes the Prev/Next button work
const projectCards = document.querySelector(".projects-container");
const sliderButton = document.querySelectorAll(".slider-button");

sliderButton.forEach(button => {
    button.addEventListener("click", () => {
        const direction = button.id === "prev" ? -1 : 1;
        const scrollAmount = $(".projects-card").width() * direction;
        
        projectCards.scrollLeft += scrollAmount;
    })
})

// Hide Prev/Next Button when the end is reached
function hideSideButtons() {
    const maxScrollLeft = projectCards.scrollWidth - projectCards.clientWidth;

    sliderButton[0].style.display = projectCards.scrollLeft <= 0 ? "none" : "block"
    sliderButton[1].style.display = projectCards.scrollLeft >= maxScrollLeft ? "none" : "block"
}

projectCards.addEventListener("scroll", () => {
    hideSideButtons();
})

// Auto Update copyright year
document.querySelector('#copyright-year').innerText = new Date().getFullYear();