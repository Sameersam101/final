// This JS file is responsible for overlay of the content

// Fixed container
const fixedContainer = document.querySelector(".fixed-container");

// Movie info
const movieLogo = fixedContainer.querySelector(".book-img .header .logo img");
const movieInfo = document.getElementById("movieInfo");
const movieTitle = movieInfo.querySelector(".title");
const movieAurthor = movieInfo.querySelector(".aurthor");
const movieImg = document.querySelector("#movieImg img.img");

// Modal close button
const closeModal = fixedContainer.querySelector(".close");
closeModal.onclick = () => {
  fixedContainer.style.display = "none";
};

// Get all the boxes inside of team-content with class='box'
const boxes = document.querySelectorAll(".team-content .box");

// Show movie infos
const showOverlay = (item, id) => {
  const img = item.querySelector(".img");
  const title = item.querySelector(".title");
  const aurthor = item.querySelector(".aurthor");

  movieTitle.innerHTML = title.innerHTML;
  movieAurthor.innerHTML = aurthor.innerHTML;
  movieImg.src = img.src;
  movieLogo.s  rc = img.src;

  fixedContainer.style.display = "flex";
};

// Add click event to all the movie boxes
boxes.forEach((item, index) => {
  item.onclick = () => showOverlay(item, index);
});
