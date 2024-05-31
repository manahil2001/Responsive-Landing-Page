/* Tooltip */

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
  });

  

/* Fetching nav.html */

  document.addEventListener("DOMContentLoaded", function() {
    fetch('nav.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('nav-container').innerHTML = html;


  

/* Hover Color Change Property for Navigation Items */

        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
          link.addEventListener('mouseenter', function() {
            this.style.color = '#fcbe03'; // Change color on hover
          });
          link.addEventListener('mouseleave', function() {
            this.style.color = ''; // Reset color on mouse leave
          });
        });

/* Highlight Active Navigation Link Based on Current URL */
       
        const currentPath = window.location.pathname.split('/').pop();
      navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
          link.classList.add('active');
        }
      });

        
      });
  });

  
