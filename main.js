const ship = document.querySelector(".ship");
const body = document.querySelector("body");
const bgColor = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    console.log(red, green, blue)
}


const move = (event) => {

    switch (event.keyCode) {

        case 37: {
            ship.offsetLeft > 0 ? ship.style.left = ship.offsetLeft - 10 + "px" : ship.style.left;

        };
            break;
        case 38: {
            ship.style.top = ship.offsetTop - 10 + "px";

        };
            break;
        case 39: {
            ship.offsetLeft < window.innerWidth ? ship.style.left = ship.offsetLeft + 10 + "px" : ship.style.left = ship.style.left + ship.style.width;
            console.log(ship.offsetLeft);
            console.log(window.innerWidth)
        };
            // ship.style.left = ship.offsetLeft + 10 + "px" };
            break;
        case 40: { ship.style.top = ship.offsetTop + 10 + "px" };
            break;
        case 32: {

            bgColor()
        };
            break;
        default: { console.log(this.event.keyCode) }
    }


}

window.addEventListener("keydown", move);