
let carouselIndex = 0; // Rinominato per evitare conflitti

function moveSlide(direction) {
  const slide = document.querySelector('.carousel-slide');
  const items = document.querySelectorAll('.work-item');
  if (!slide || items.length === 0) return;
  
  const itemWidth = items[0].offsetWidth + 20; // Larghezza + margine
  const visibleItems = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
  
  carouselIndex += direction;
  if (carouselIndex < 0) carouselIndex = items.length - visibleItems;
  if (carouselIndex > items.length - visibleItems) carouselIndex = 0;
  
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
  const navLinks = navMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        navMenu.classList.remove('show');
      }
    });
  });
  
  // Inizializza il carosello per mostrare i primi 3 elementi
  moveSlide(0);
  
  // Ricalibra il padding quando la finestra viene ridimensionata
  window.addEventListener('resize', function() {
    document.body.style.paddingTop = mainNav.offsetHeight + 'px';
    
    // Reset del carosello
    carouselIndex = 0;
    moveSlide(0); // Resetta la posizione ma mantiene la logica di visualizzazione
  });
});