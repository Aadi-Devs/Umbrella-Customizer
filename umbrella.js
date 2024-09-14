// Storing all the necessary elements
const imgSection = document.querySelector(".image-section .umbrella-image");
const svgLoader = document.querySelector(".image-section .svg-loader");
const colorButtons = document.querySelectorAll(".color-btn");
const uploadBtn = document.querySelector(".upload-btn");
const fileInput = document.querySelector(".logo-upload");
const logoPreview = document.querySelector(".logo-preview");
const closeBtn = document.querySelector(".close-btn");
const uploadIcon = document.querySelector(".upload-icon");
const body = document.querySelector("body");
const uploadTxt = document.querySelector(".upload-txt"); // Reference to the upload-txt element

// for hiding the close button initially
closeBtn.style.display = "none";

colorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const color = button.dataset.color;
    let fillColor;

    //Code to Show the loader immediately
    svgLoader.style.display = "block";
    imgSection.classList.add("hidden");
    logoPreview.classList.add("hidden");

    // Update the color of the background and the upload button
    switch (color) {
      case "Pink":
        fillColor = "#D41B7E";
        uploadBtn.style.backgroundColor = fillColor;
        body.style.backgroundColor = `${fillColor}38`;
        break;
      case "Blue":
        fillColor = "#14AAE2";
        uploadBtn.style.backgroundColor = fillColor;
        body.style.backgroundColor = `${fillColor}38`;
        break;
      case "Yellow":
        fillColor = "#F4C93E";
        uploadBtn.style.backgroundColor = fillColor;
        body.style.backgroundColor = `${fillColor}2E`;
        break;
      default:
        fillColor = "#000000";
        uploadBtn.style.backgroundColor = fillColor;
        body.style.backgroundColor = "#0000001A";
        break;
    }

    // Setting the fill color of the SVG path
    svgLoader.querySelector("path").setAttribute("fill", fillColor);

    // Hiding the loader and updating the image
    setTimeout(() => {
      svgLoader.style.display = "none";
      imgSection.setAttribute("src", `./assets/${color} umbrella.png`);
      imgSection.classList.remove("hidden");
      logoPreview.classList.remove("hidden");
    }, 500); // time taken to wait for hiding the loader
  });
});

uploadBtn.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    uploadIcon.src = "./assets/loader_icon.svg";
    uploadIcon.classList.add("rotating");

    reader.onload = (e) => {
      svgLoader.style.display = "block";
      logoPreview.style.display = "none";
      imgSection.style.display = "none";

      setTimeout(() => {
        svgLoader.style.display = "none";
        logoPreview.src = e.target.result;
        logoPreview.style.display = "block";
        imgSection.style.display = "block";

        uploadIcon.src = "./assets/upload_icon.svg";
        uploadIcon.classList.remove("rotating");

        // Updating the upload-txt element with the file name and showing the close button
        uploadTxt.textContent = file.name;
        closeBtn.style.display = "block";
      }, 1000);
    };

    reader.readAsDataURL(file);
  }
});


// when close button is clicked then the text will reset back to default and the close button will hide
closeBtn.addEventListener("click", () => {
  logoPreview.style.display = "none";
  uploadTxt.textContent = "UPLOAD LOGO";
  closeBtn.style.display = "none";
});