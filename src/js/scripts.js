document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const dropdownMenu = document.getElementById('dropdown-menu');

    menuIcon.addEventListener('click', function() {
        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
        } else {
            dropdownMenu.style.display = 'block';
        }
    });

    document.addEventListener('click', function(event) {
        if (!menuIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });


});


/*fade up*/

document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    });

    const targets = document.querySelectorAll('.fade-in-up');
    targets.forEach(target => {
        observer.observe(target);
    });
});


/*fade up fim*/

/* GALLERY SCRIPT */
document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    const items = document.querySelectorAll('.gallery-item');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let index = 0;
    const totalItems = items.length;
    const visibleItems = window.innerWidth >= 600 ? 3 : 1;

    function updateGallery() {
        const itemWidth = gallery.clientWidth / visibleItems;
        gallery.style.transform = `translateX(-${index * itemWidth}px)`;
    }

    function next() {
        if (index < totalItems - visibleItems) {
            index++;
        } else {
            index = 0;
        }
        updateGallery();
    }

    function prev() {
        if (index > 0) {
            index--;
        } else {
            index = totalItems - visibleItems;
        }
        updateGallery();
    }

    nextButton.addEventListener('click', next);
    prevButton.addEventListener('click', prev);

    setInterval(next, 5000); // Adjust the interval time as needed

    window.addEventListener('resize', updateGallery);
    updateGallery(); // Initial call to set the gallery position
});



/* FIM GALLERY*/


/*Experience*/

// Função para animar a contagem
function animateCounter(id, start, end, duration) {
    let element = document.getElementById(id);
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    
    let timer = setInterval(() => {
        current += increment;
        element.innerText = "+" + current; // Adiciona o símbolo "+" antes do número
        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Função para iniciar a animação quando o elemento entrar na viewport
function startAnimation(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter('experience-years', 0, 10, 2000);
            animateCounter('experience-projects', 0, 250, 2000);
            observer.disconnect(); // Para de observar depois de iniciar a animação
        }
    });
}

// Configura o Intersection Observer
let observer = new IntersectionObserver(startAnimation, {
    threshold: 0.5 // Inicia a animação quando 50% da div estiver visível
});

// Observa a div com a classe 'experience'
observer.observe(document.querySelector('.experience'));

/* EXPERIENCE FIM*/
