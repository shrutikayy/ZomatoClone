// Fade-in cards on scroll
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
            entry.target.style.transition = "0.6s ease";
        }
    });
}, { threshold: 0.1 });

cards.forEach(card => observer.observe(card));

// Rotating search placeholder
const input = document.querySelector(".hero-content input");
const placeholders = [
    "Search for restaurants…",
    "Biryani, Pizza, Burger…",
    "Try 'Pav Bhaji' in Dadar",
    "Search for cuisine or dish…"
];
let i = 0;
setInterval(()=>{
    input.placeholder = placeholders[i];
    i=(i+1)%placeholders.length;
}, 2500);
