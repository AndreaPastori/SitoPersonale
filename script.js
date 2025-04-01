<script>
let index = 0;

function moveSlide(direction) {
    const slide = document.querySelector('.carousel-slide');
    const items = document.querySelectorAll('.work-item');
    
    // Calcola la larghezza in base alla dimensione dello schermo
    const itemWidth = items[0].offsetWidth + 20;
    const visibleItems = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    
    index += direction;
    if (index < 0) index = items.length - visibleItems;
    if (index > items.length - visibleItems) index = 0;
    
    slide.style.transform = `translateX(-${index * itemWidth}px)`;
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
    // Ottieni riferimenti agli elementi del DOM
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    
    // Aggiungi l'evento click al bottone hamburger
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', function(e) {
            e.preventDefault(); // Previeni comportamento predefinito
            navMenu.classList.toggle('show');
        });
    }
    
    // Chiudi il menu quando si fa click su un link
    const navLinks = document.querySelectorAll('#nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('show');
        });
    });
    
    // Chiudi il menu quando si fa click fuori dal menu
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && e.target !== hamburgerBtn) {
            navMenu.classList.remove('show');
        }
    });
    
    // Mantieni il resto del codice per il carosello
    let index = 0;
    
    window.moveSlide = function(direction) {
        const slide = document.querySelector('.carousel-slide');
        const items = document.querySelectorAll('.work-item');
        // Calcola la larghezza in base alla dimensione dello schermo
        const itemWidth = items[0].offsetWidth + 20;
        const visibleItems = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
        
        index += direction;
        if (index < 0) index = items.length - visibleItems;
        if (index > items.length - visibleItems) index = 0;
        
        slide.style.transform = `translateX(-${index * itemWidth}px)`;
    };
    
    window.openDetails = function(title, description) {
        document.getElementById('project-title').innerText = title;
        document.getElementById('project-description').innerText = description;
        document.getElementById('project-details').style.display = 'block';
    };
    
    window.closeDetails = function() {
        document.getElementById('project-details').style.display = 'none';
    };
    
    // Inizializza il carosello
    window.addEventListener('resize', function() {
        const slide = document.querySelector('.carousel-slide');
        if (slide) {
            slide.style.transform = 'translateX(0)';
            index = 0;
        }
    });
});

</script>