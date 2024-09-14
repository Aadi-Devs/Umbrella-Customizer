// Selecting all the required elements
const imgSection = document.querySelector(".image-section .umbrella-image");
const svgLoader = document.querySelector(".image-section .svg-loader");
const colorButtons = document.querySelectorAll(".color-btn");
const uploadBtn = document.querySelector(".upload-btn");
const fileInput = document.querySelector(".logo-upload");
const logoPreview = document.querySelector(".logo-preview");
const closeBtn = document.querySelector(".close-btn");
const body = document.querySelector("body");

colorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const color = button.dataset.color;

    svgLoader.style.display = "block";
    imgSection.classList.add("hidden");
    logoPreview.classList.add("hidden");

    setTimeout(() => {
      svgLoader.style.display = "none";
      imgSection.setAttribute("src", `./assets/${color} umbrella.png`);
      imgSection.classList.remove("hidden");
      logoPreview.classList.remove("hidden");

      // Code for changing the colours of the background and the upload button. 

      if (color === "Pink") {
        uploadBtn.style.transition = "background-color 0.3s ease";
        uploadBtn.style.backgroundColor = "#D41B7E";
        body.style.backgroundColor = "#d41b7e38";
      } else if (color === "Blue") {
        uploadBtn.style.transition = "background-color 0.3s ease";
        uploadBtn.style.backgroundColor = "#14AAE2";
        body.style.backgroundColor = "#14abe238";
      } else {
        uploadBtn.style.transition = "background-color 0.3s ease";
        uploadBtn.style.backgroundColor = "#F4C93E";
        body.style.backgroundColor = "#f4ca3e2e";
      }
    }, 500); // delay in changing the colours of the background and the upload button 
  });
});

uploadBtn.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = (e) => {
      // This code is to show the loder icon and hide the other elements
      svgLoader.style.display = "block";
      logoPreview.style.display = "none";
      imgSection.style.display = "none";

      // this code is for waitinng for a few seconds before showing the logo and hiding the loader
      setTimeout(() => {
        svgLoader.style.display = "none";
        logoPreview.src = e.target.result;
        logoPreview.style.display = "block";
        imgSection.style.display = "block";
      }, 1000); // we have to adjust this for our desired delay.
    };

    reader.readAsDataURL(file);
  }
});

closeBtn.addEventListener("click", () => {
  logoPreview.style.display = "none";
});
