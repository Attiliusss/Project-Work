document.addEventListener('DOMContentLoaded', () => {
    // Seleziona tutti gli elementi animati
    const elements = document.querySelectorAll('.sezioni-imgsfondo, .animazione-slide');

    // Configurazione dell'Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Animazione che avviene una sola volta per elemento
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 }); // attiva quando il 20% dell'elemento è visibile

    // Osserva ogni elemento selezionato
    elements.forEach(el => observer.observe(el));
});