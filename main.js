const ship = document.querySelector(".ship");
const body = document.querySelector("body");
const move = (event) => {

    if (event.keyCode = 37) ship.style.left = "280px";
    else console.log(event.keyCode);
}
ship.addEventListener("click", () => alert("ups"));
body.addEventListener("keydown", move);