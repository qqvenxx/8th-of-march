document.addEventListener("mousemove", function (e) {
    createFlower(e.pageX, e.pageY);
});

function createFlower(x, y) {
    let body = document.querySelector("body");
    let flower = document.createElement("div");
    flower.classList.add("flower");

    flower.style.left = x + "px";
    flower.style.top = y + "px";

    let size = Math.random() * 40 + 20; 
    flower.style.width = size + "px";
    flower.style.height = size + "px";

    let rotation = Math.random() * 360;
    flower.style.transform = `rotate(${rotation}deg)`;

    body.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 1000);
}

