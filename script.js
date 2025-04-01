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
    
    // Verifica se ENTRAMBI gli elementi esistono prima di procedere
    if (hamburgerBtn && navMenu) {
        console.log('Adding click event to hamburger button');
        
        // Aggiungi evento click al bottone hamburger
        hamburgerBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Toggle menu called');
            
            // Toggle della classe show
            navMenu.classList.toggle('show');
            console.log(navMenu.classList.contains('show') ? 'Menu shown' : 'Menu hidden');
        });
        
        // Chiudi il menu quando si fa click su un link
        const navLinks = document.querySelectorAll('#nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('show');
                console.log('Menu closed by link click');
            });
        });
    } else {
        console.error('Menu hamburger elements not found! hamburgerBtn:', hamburgerBtn, 'navMenu:', navMenu);
    }
    
    // Codice per il carosello
    let index = 0;
    
    function moveSlide(direction) {
        const slide = document.querySelector('.carousel-slide');
        const items = document.querySelectorAll('.work-item');
        
        if (!slide || items.length === 0) return;
        
        const itemWidth = items[0].offsetWidth + 20;
        const visibleItems = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
        
        index += direction;
        if (index < 0) index = items.length - visibleItems;
        if (index > items.length - visibleItems) index = 0;
        
        slide.style.transform = `translateX(-${index * itemWidth}px)`;
    }
    
    function openDetails(title, description) {
        const projectTitle = document.getElementById('project-title');
        const projectDescription = document.getElementById('project-description');
        const projectDetails = document.getElementById('project-details');
        
        if (projectTitle && projectDescription && projectDetails) {
            projectTitle.innerText = title;
            projectDescription.innerText = description;
            projectDetails.style.display = 'block';
        }
    }
    
    function closeDetails() {
        const projectDetails = document.getElementById('project-details');
        if (projectDetails) {
            projectDetails.style.display = 'none';
        }
    }
    
    // Esponi le funzioni globalmente se necessario
    window.moveSlide = moveSlide;
    window.openDetails = openDetails;
    window.closeDetails = closeDetails;
    
    // Gestisci il ridimensionamento della finestra
    window.addEventListener('resize', function() {
        const slide = document.querySelector('.carousel-slide');
        if (slide) {
            slide.style.transform = 'translateX(0)';
            index = 0;
        }
    });
});

</script>