let button = document.getElementById("btn");
let image = document.getElementById("imageBox");

button.addEventListener("click", function () {

    let imageName = prompt("Enter image name:");

    if (imageName === "car") {
        image.src = "assets/property-.jpg";
    }
    else if (imageName === "bike") {
        image.src = "assets/bike.jpg";
    }
    else if (imageName === "flower") {
        image.src = "assets/flower.jpg";
    }
    else if (imageName === "nature") {
        image.src = "assets/nature.jpg";
    }
    else {
        alert("Image not found!");
        image.style.display = "none";
        return;
    }

    image.style.display = "block";
});