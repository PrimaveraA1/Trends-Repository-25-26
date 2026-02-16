// When a li is hovered it stays there until a new one is hovered again the corresponding card is also shown
const list_items = document.querySelectorAll('.introduction .right-container li');
const cards = document.querySelectorAll('.left-container .card');

list_items.forEach((item, i) => {
    item.addEventListener('mouseenter', () => {
        list_items.forEach(item => item.classList.remove('hold-state'));
        cards.forEach(card => card.classList.remove('active'));
        
        item.classList.add('hold-state');

        if (cards[i]) {
            cards[i].classList.add('active');
        }
    });
});

// scroll animation for must-haves section
const container = document.getElementById('scroll-container');
const items = container.innerHTML;
container.innerHTML += items; 

let scrollAmount = 0;
let isPaused = false;
const speed = 2; // the higher the faster

function step() {
    if (!isPaused) {
        scrollAmount += speed;
        
        if (scrollAmount >= container.scrollWidth / 2) {
            scrollAmount = 0;
        }
        
        container.scrollLeft = scrollAmount;
    }
    window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);

container.addEventListener('mouseenter', () => isPaused = true);
container.addEventListener('mouseleave', () => isPaused = false);

// Button Logic
const openBtn = document.getElementById('button'); 

function showAlert() {
    const alertBox = document.getElementById('alert');
    if (alertBox) {
        alertBox.style.display = 'flex';
        console.log("Alert opened!");
    }
}

function closeAlert(event) {
    if (event) event.stopPropagation(); 
    const alertBox = document.getElementById('alert');
    alertBox.style.display = 'none';
    console.log("Alert closed!");
}

// Fixed syntax: 'click' instead of 'onclick', and correct arrow function
if (openBtn) {
    openBtn.addEventListener('click', () => {
        showAlert();
    });
}