const progress = document.getElementById("progress");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let activeIndex = 1;

// Next button event listener
nextBtn.addEventListener("click", () => {
    activeIndex++;
    if (activeIndex > circles.length) {
        activeIndex = circles.length;
    }
    updateUI();
});

// Previous button event listener
prevBtn.addEventListener("click", () => {
    activeIndex--;
    if (activeIndex < 1) {
        activeIndex = 1;
    }
    updateUI();
});

// Update UI based on active step
function updateUI() {
    circles.forEach((circle, index) => {
        if (index < activeIndex) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });

    const actives = document.querySelectorAll(".active");
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

    prevBtn.disabled = activeIndex === 1;
    nextBtn.disabled = activeIndex === circles.length;
}
