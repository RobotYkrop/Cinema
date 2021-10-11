const schemeSvg = document.querySelector('.scheme-svg');
const totalPriceTag = document.querySelector(".price-total")
let cost = 400;
let totalPrice = 0;
schemeSvg.addEventListener("click", (event) => {
    if (!event.target.classList.contains('booked')) {
        event.target.classList.toggle('active');
let totalSeets = schemeSvg.querySelectorAll(".active").length;
        totalPrice = totalSeets * cost;
        totalPriceTag.textContent= totalPrice ;
    }
});