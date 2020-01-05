const ship = document.querySelector(".ship");

const move = (event) => {

    switch (event.keyCode) {

        case 37: { ship.style.left = ship.offsetLeft - 10 + "px" };
            break;
        case 38: {
            ship.style.top = ship.offsetTop - 10 + "px";
            // ship.style.fill = "red";
        };
            break;
        case 39: { ship.style.left = ship.offsetLeft + 10 + "px" };
            break;
        case 40: { ship.style.top = ship.offsetTop + 10 + "px" };
            break;
    }


}

window.addEventListener("keydown", move);