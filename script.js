// Get the modal and close button
const modal = document.getElementById("messageModal");
const closeButton = document.querySelector(".close");

// When the user clicks on the "Messages" link, show the modal
document.getElementById("openMessage").addEventListener("click", function(event) {
  event.preventDefault();
  modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
closeButton.addEventListener("click", function() {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
