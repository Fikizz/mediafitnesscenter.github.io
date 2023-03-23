const hamburger = document.querySelector('.header1 .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header1 .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header1 .nav-bar .nav-list ul li a');
const header1 = document.querySelector('.header1 .container1');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) 
  {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});




// JS FOR SKILLBAR
// Select the sections
const sections = document.querySelectorAll('.poceten1');

// Create a function to animate the elements
function animateElements() {
  sections.forEach((section, index) => {
    // Get the position of the current section
    const sectionPosition = section.getBoundingClientRect().top;

    // Check if the current section is in the viewport
    if (sectionPosition < window.innerHeight) {
      // Animate the elements
      const image = section.querySelector('.image1 , .image2 , .image3');
      const naslovtrener = section.querySelector('.naslovtrener, .naslovtrener1 , .naslovtrener3');
      const paragraftrener = section.querySelector('.paragraftrener, .paragraftrener1 , .paragraftrener3');
      const skill4 = section.querySelector('.skill4');
      const skill5 = section.querySelector('.skill5');
      const skill6 = section.querySelector('.skill6');
      
      image.style.animation = 'fadeIn 1s ease-out forwards';
      naslovtrener.style.animation = 'fadeIn 1s ease-out forwards';
      paragraftrener.style.animation = 'fadeIn 1s ease-out forwards';
      skill4.style.animation = `slideInLeft ${index + 1}s ease-out forwards`;
      skill5.style.animation = `slideInLeft ${index + 1.5}s ease-out forwards`;
      skill6.style.animation = `slideInLeft ${index + 2}s ease-out forwards`;
    }
  });
}

// Listen for scroll events
window.addEventListener('scroll', animateElements);
