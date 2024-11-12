
const typedTextSpan = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = ["Sahil_creative_graphics", "hiteshkumar1570", "--aman.--08", "Rahul_dev.0103", "mr_rishav_9", "devesh__mittal", "Nitinyadav.ind", "white_god__", "", "rohit_grokhpuriya", "shanichaudbary__", "laden_khan__", "master_ji_24", "lokesh_rai_43", "time_chnager__raj", "harshit_official",
    "black_lover_ritik", "Akash_rao_07420", "sikndr_rao", "harsuu._.here", "its_ydv_abhi_"]

const typingDelay = 200;
const erasingDelay = 200;
const newLetterDelay = 200;
let index = 0;
let charIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    if (words.length) {
        setTimeout(type, newLetterDelay);
    }
});

function type() {
    if (charIndex < words[index].length) {
        typedTextSpan.textContent += words[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newLetterDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = words[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        index++;
        if (index >= words.length) {
            index = 0;
        }
        setTimeout(type, typingDelay + 1100);
    }
}