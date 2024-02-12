
//FAQ drop down page
var acc = document.getElementsByClassName("acc-title");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display == "block"){
                panel.style.display = "none";
        } 
        else{
            panel.style.display = "block";
        }
    });
}

//Mega Menus
document.addEventListener("DOMContentLoaded", function () {
    // Function to show and hide mega menus
    function handleMegaMenu(menuId, megaMenuClass) {
      const menu = document.getElementById(menuId);
      const megaMenu = menu.querySelector(megaMenuClass);
    //   const navWidth = document.querySelector('.nav').offsetWidth;
    //   const navPosition = navWidth / 2.25;

    function showMegaMenu() {
        megaMenu.style.display = "block";
        // megaMenu.style.left = navPosition + "px";
      }
    function hideMegaMenu() {
        megaMenu.style.display = "none";
      }
      menu.addEventListener("mouseenter", showMegaMenu);
      menu.addEventListener("mouseleave", hideMegaMenu);
    }
  
    // Usage: Call the function for each mega menu
    handleMegaMenu("services-menu", ".mega-container");
    handleMegaMenu("contact-menu", ".mega-container");
    handleMegaMenu("aboutUs-menu", ".mega-container");
    handleMegaMenu("desk-trail-mega", ".mega-container");
    handleMegaMenu("geek-pasta-mega", ".mega-container");
  });
  


// subheader dropdown for services menu
document.addEventListener("DOMContentLoaded", function () {
    const servicesMenu = document.getElementById("services-menu");
    const subheader = document.querySelector(".subheader");
    const contactMenu = document.getElementById("contact-menu");
    const aboutUsMenu = document.getElementById("aboutUs-menu");
    const aboutYouMenu = document.getElementById("aboutYou-menu");
    const deskTrailMega = document.getElementById("desk-trail-mega");
    const geekPastaMega = document.getElementById("geek-pasta-mega");
    
// Function to add margin-top to the subheader
    function addMarginTop() {
    subheader.style.marginTop = "30%"; // Adjust the margin value as needed
    }
    
//Function to remove margin-top from the subheader
    function removeMarginTop() {
    subheader.style.marginTop = "0";
    }
    
//Event listeners for hover effect
    servicesMenu.addEventListener("mouseenter", addMarginTop);
    servicesMenu.addEventListener("mouseleave", removeMarginTop);
    contactMenu.addEventListener("mouseenter", addMarginTop);
    contactMenu.addEventListener("mouseleave", removeMarginTop);
    aboutUsMenu.addEventListener("mouseenter", addMarginTop);
    aboutUsMenu.addEventListener("mouseleave", removeMarginTop);
    aboutYouMenu.addEventListener("mouseenter", addMarginTop);
    aboutYouMenu.addEventListener("mouseleave", removeMarginTop);
    deskTrailMega.addEventListener("mouseenter",addMarginTop);
    deskTrailMega.addEventListener("mouseleave", removeMarginTop);
    geekPastaMega.addEventListener("mouseenter", addMarginTop);
    geekPastaMega.addEventListener("mouseleave", removeMarginTop);
    });

    //scroll to the top function
    document.addEventListener("DOMContentLoaded", function () {
        var scrollToTopButton = document.getElementById("scroll-to-top");
    
        // Show the button when user scrolls down
        window.addEventListener("scroll", function () {
            if (window.pageYOffset > 100) { // Adjust this value based on your needs
                scrollToTopButton.style.display = "block";
            } else {
                scrollToTopButton.style.display = "none";
            }
        });
    
        // Scroll to top when the button is clicked
        scrollToTopButton.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth" // Smooth scrolling animation
            });
        });
    });
    
