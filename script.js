document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple fade-in animation for sections
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(section);
    });

    // Mock data for predictions
    const predictions = [
        { title: 'The Rise of Quantum Computing', date: '2025-12-01', summary: 'Quantum computers will solve complex problems beyond the reach of current supercomputers.' },
        { title: 'AI in Personalized Medicine', date: '2026-02-15', summary: 'AI algorithms will tailor medical treatments to individual genetic profiles.' },
        { title: 'The Future of Transportation', date: '2026-05-20', summary: 'Self-driving cars and high-speed rail will revolutionize how we travel.' }
    ];

    const predictionsContainer = document.querySelector('#predictions');
    predictions.forEach(prediction => {
        const predictionElement = document.createElement('div');
        predictionElement.classList.add('prediction');
        predictionElement.innerHTML = `
            <h3>${prediction.title}</h3>
            <p class="date">${prediction.date}</p>
            <p>${prediction.summary}</p>
        `;
        predictionsContainer.appendChild(predictionElement);
    });

    // Burger menu functionality
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
});
