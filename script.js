
let index = 0;
        function moveSlide(direction) {
            const slide = document.querySelector('.carousel-slide');
            const items = document.querySelectorAll('.work-item');
            const total = items.length;
            index = (index + direction + total) % total;
           // slide.style.transform = ⁠ translateX(${-index * 200}px) ⁠;
        }

function openDetails(title, description) {
    document.getElementById('project-title').innerText = title;
    document.getElementById('project-description').innerText = description;
    document.getElementById('project-details').style.display = 'block';
}

function closeDetails() {
    document.getElementById('project-details').style.display = 'none';
}

// Inizializza il carosello
window.addEventListener('load', function() {
    // Aggiungi un evento di ridimensionamento per ricalibrare il carosello
    window.addEventListener('resize', function() {
        const slide = document.querySelector('.carousel-slide');
        slide.style.transform = 'translateX(0)';
        index = 0;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Elementi del DOM
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    const mainNav = document.getElementById('main-nav');
    
    // Aggiungi la gestione dello scroll per rendere fisso il menu
    let navOffset = mainNav.offsetTop;
    
    function handleScroll() {
      if (window.pageYOffset >= navOffset) {
        mainNav.classList.add('sticky-nav');
        document.body.style.paddingTop = mainNav.offsetHeight + 'px';
      } else {
        mainNav.classList.remove('sticky-nav');
        document.body.style.paddingTop = 0;
      }
    }
    
    // Aggiungi l'evento di scroll
    window.addEventListener('scroll', handleScroll);
    
    // Gestione del menu hamburger
    if (hamburgerBtn && navMenu) {
      hamburgerBtn.addEventListener('click', function() {
        // Controlla se il menu è visibile
        if (navMenu.style.display === 'block') {
          navMenu.style.display = 'none';
        } else {
          navMenu.style.display = 'block';
        }
        console.log('Menu hamburger cliccato');
      });
      
      // Chiudi il menu quando si fa click su un link
      const navLinks = document.querySelectorAll('#nav-menu a');
      navLinks.forEach(link => {
        link.addEventListener('click', function() {
          navMenu.style.display = 'none';
        });
      });
    }
    
    // Carosello - mantenuto dalla tua implementazione originale
    let index = 0;
    window.moveSlide = function(direction) {
      const slide = document.querySelector('.carousel-slide');
      const items = document.querySelectorAll('.work-item');
      if (!slide || items.length === 0) return;
      const itemWidth = items[0].offsetWidth + 20;
      const visibleItems = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
      index += direction;
      if (index < 0) index = items.length - visibleItems;
      if (index > items.length - visibleItems) index = 0;
      slide.style.transform = `translateX(-${index * itemWidth}px)`;
    };
    
    window.openDetails = function(title, description) {
      const projectTitle = document.getElementById('project-title');
      const projectDescription = document.getElementById('project-description');
      const projectDetails = document.getElementById('project-details');
      if (projectTitle && projectDescription && projectDetails) {
        projectTitle.innerText = title;
        projectDescription.innerText = description;
        projectDetails.style.display = 'block';
      }
    };
    
    window.closeDetails = function() {
      const projectDetails = document.getElementById('project-details');
      if (projectDetails) {
        projectDetails.style.display = 'none';
      }
    };
    
    // Ricalibra la posizione del nav quando la finestra viene ridimensionata
    window.addEventListener('resize', function() {
      navOffset = mainNav.offsetTop;
      handleScroll(); // Ricalcola immediatamente
      
      // Codice originale per il carosello
      const slide = document.querySelector('.carousel-slide');
      if (slide) {
        slide.style.transform = 'translateX(0)';
        index = 0;
      }
    });
  });
