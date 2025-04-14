let carouselIndex = 0;

function moveSlide(direction) {
  const slide = document.querySelector('.carousel-slide');
  const items = document.querySelectorAll('.work-item');
  const carousel = document.querySelector('.carousel');
  
  if (!slide || items.length === 0 || !carousel) return;
  
  // Calcola quanti elementi possono essere mostrati in base alla larghezza attuale
  const carouselWidth = carousel.offsetWidth;
  const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginLeft) + 
                    parseInt(getComputedStyle(items[0]).marginRight);
  
  // Calcola quanti elementi interi possono entrare nel carosello
  const visibleItems = Math.floor(carouselWidth / itemWidth);
  
  // Calcola il numero massimo di "pagine" del carosello
  const maxIndex = Math.max(0, items.length - visibleItems);
  
  // Aggiorna l'indice del carosello
  carouselIndex += direction;
  
  // Assicurati che l'indice sia valido
  if (carouselIndex < 0) carouselIndex = maxIndex;
  if (carouselIndex > maxIndex) carouselIndex = 0;
  
  // Sposta il carosello
  slide.style.transform = `translateX(-${carouselIndex * itemWidth}px)`;
}

window.openDetails = function(title, description, imageSrc) {
  const projectTitle = document.getElementById('project-title');
  const projectDescription = document.getElementById('project-description');
  const projectImage = document.getElementById('project-image');
  const projectDetails = document.getElementById('project-details');
  
  if (projectTitle && projectDescription && projectImage && projectDetails) {
    projectTitle.innerText = title;
    projectDescription.innerText = description;
    
    // Imposta l'immagine corretta per ciascun progetto
    if (imageSrc) {
      projectImage.src = imageSrc;
    }
    
    projectDetails.style.display = 'block';
    
    // Aggiungi overlay di sfondo scuro
    const overlay = document.createElement('div');
    overlay.id = 'project-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.7)';
    overlay.style.zIndex = '999';
    overlay.onclick = closeDetails;
    document.body.appendChild(overlay);
    
    // Disabilita lo scroll della pagina
    document.body.style.overflow = 'hidden';
  }
};

function closeDetails() {
  document.getElementById('project-details').style.display = 'none';
  
  // Rimuovi overlay
  const overlay = document.getElementById('project-overlay');
  if (overlay) {
    overlay.remove();
  }
  
  // Riabilita lo scroll della pagina
  document.body.style.overflow = 'auto';
}

// Gestione del carosello e del menu fisso
document.addEventListener('DOMContentLoaded', function() {
  // Elementi del DOM
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  const mainNav = document.getElementById('main-nav');
  
  // Imposta l'altezza corretta del padding del body in base all'altezza del menu
  document.body.style.paddingTop = mainNav.offsetHeight + 'px';
  
  // Gestione del menu hamburger
  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', function() {
      navMenu.classList.toggle('show');
    });
  }
  
  // Gestisci i click sui link del menu per nasconderlo su mobile dopo il click
  const navLinks = navMenu ? navMenu.querySelectorAll('a') : [];
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        navMenu.classList.remove('show');
      }
    });
  });
  
  // Inizializza il carosello per mostrare i primi elementi
  moveSlide(0);
  
  // Ricalibra il padding quando la finestra viene ridimensionata
  window.addEventListener('resize', function() {
    if (mainNav) {
      document.body.style.paddingTop = mainNav.offsetHeight + 'px';
    }
    
    // Reset del carosello
    carouselIndex = 0;
    moveSlide(0); // Resetta la posizione ma mantiene la logica di visualizzazione
  });
});