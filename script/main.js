const myImage = document.querySelector("img");

if (myImage) {
  myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "../images/img2.png") {
      myImage.setAttribute("src", "../images/img.png");
    } else {
      myImage.setAttribute("src", "../images/img2.png");
    }
  };
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");