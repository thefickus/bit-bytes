//extend cards javascript
document.addEventListener("DOMContentLoaded", function () {
    const expandButtons = document.querySelectorAll(".expand-btn");
    const collapseIcons = document.querySelectorAll(".collapse-icon");

    expandButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            const card = this.parentElement;
            const collapseIcon = card.querySelector(".collapse-icon");
            if (!card.classList.contains("expanded")) {
                card.classList.add("expanded");
                collapseIcon.style.display = "block"; // Show collapse icon
                this.textContent = "Read Less"; // Change button text to "Read Less"
            } else {
                card.classList.remove("expanded");
                collapseIcon.style.display = "none"; // Hide collapse icon
                this.textContent = "Expand"; // Change button text back to "Expand"
            }
        });
    });

    collapseIcons.forEach((icon) => {
        icon.addEventListener("click", function () {
            const card = this.parentElement;
            card.classList.remove("expanded");
            this.style.display = "none"; // Hide collapse icon
            const expandButton = card.querySelector(".expand-btn");
            expandButton.textContent = "Expand"; // Change button text back to "Expand"
        });
    });
});

//timeline popups
// Get the modal
var modal = document.getElementById("myModal");
var modalContent = modal.querySelector(".modal-content");
// Get all buttons that open the modal
var btns = document.getElementsByClassName("openModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Loop through all buttons and add onclick event handler
for (var i = 0; i < btns.length; i++) {
  btns[i].onclick = function() {
    modalContent.innerHTML = this.dataset.modalContent; // Set modal content based on 'data-modal-content' attribute
    modal.style.display = "block";
  }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


