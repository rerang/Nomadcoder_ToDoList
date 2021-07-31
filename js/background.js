let images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg",
    "img7.jpg",
    "img8.jpg"
]

let chosenImage = `${images[Math.floor(Math.random()*images.length)]}`;
//let bgImage = document.createElement("img");
//bgImage.src = `img/${chosenImage}`;
//document.body.appendChild(bgImage);

let bodyTag = document.querySelector("body");
bodyTag.setAttribute("style", "background-image: url('img/"+chosenImage+"'); background-size: 100% auto; background-repeat: no-repeat;");
// bodyTag.setAttribute("style", "background-image: url('img/"+chosenImage+"'); background-size: 100% auto; background-repeat: no-repeat;");