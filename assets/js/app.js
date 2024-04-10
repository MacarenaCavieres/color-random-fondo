const btn = document.querySelector("#btn");
const body = document.querySelector("#body");
const color = document.querySelector("#color");

let number = `#`;
const chance = () => {
    const group = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    for (let i = 0; i <= 5; i++) {
        const spot = Math.floor(Math.random() * 16);
        number += group[spot];
    }
};

btn.addEventListener("click", () => {
    chance();
    body.style.backgroundColor = number;
    color.textContent = number;
    number = "#";
});
