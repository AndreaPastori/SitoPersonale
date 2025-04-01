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
    console.log('DOM fully loaded');
    
    // Riferimenti agli elementi
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    
    // Log per debug
    console.log('Hamburger button:', hamburgerBtn);
    console.log('Nav menu:', navMenu);
    
    // Funzione toggle per il menu
    function toggleMenu(e) {
        if (e) e.preventDefault();
        console.log('Toggle menu called');
        
        // Verifica se il menu è già visibile
        const isVisible = navMenu.classList.contains('show');
        console.log('Menu currently visible:', isVisible);
        
        // Toggle della classe show
        if (isVisible) {
            navMenu.classList.remove('show');
            console.log('Menu hidden');
        } else {
            navMenu.classList.add('show');
            console.log('Menu shown');
        }
    }
    
    // Aggiungi evento click al bottone hamburger
    if (hamburgerBtn) {
        console.log('Adding click event to hamburger button');
        hamburgerBtn.addEventListener('click', toggleMenu);
    }
    
    // Chiudi il menu quando si fa click su un link
    const navLinks = document.querySelectorAll('#nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('show');
            console.log('Menu closed by link click');
        });
    });
    
    // Resto del tuo codice per carosello
    let index = 0;
    
    window.moveSlide = function(direction) {
        const slide = document.querySelector('.carousel-slide');
        const items = document.querySelectorAll('.work-item');
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
    
    window.addEventListener('resize', function() {
        const slide = document.querySelector('.carousel-slide');
        if (slide) {
            slide.style.transform = 'translateX(0)';
            index = 0;
        }
    });
});

</script>