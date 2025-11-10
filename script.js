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
        { title: 'The Rise of Quantum Computing', date: '2025-12-01', summary: 'Quantum computers will solve complex problems beyond the reach of current supercomputers.', featured: true },
        { title: 'AI in Personalized Medicine', date: '2026-02-15', summary: 'AI algorithms will tailor medical treatments to individual genetic profiles.' },
        { title: 'The Future of Transportation', date: '2026-05-20', summary: 'Self-driving cars and high-speed rail will revolutionize how we travel.' },
        { title: 'Decentralized AI', date: '2026-08-10', summary: 'AI systems will run on decentralized networks, increasing security and reducing censorship.' },
        { title: 'AI-Powered Education', date: '2026-11-01', summary: 'Personalized learning paths created by AI will become the norm in education.' }
    ];

    const predictionsContainer = document.querySelector('#predictions');
    const featuredPrediction = predictions.find(p => p.featured);
    const otherPredictions = predictions.filter(p => !p.featured);

    if (featuredPrediction) {
        const featuredElement = document.createElement('div');
        featuredElement.classList.add('prediction', 'featured');
        featuredElement.innerHTML = `
            <h3>${featuredPrediction.title}</h3>
            <p class="date">${featuredPrediction.date}</p>
            <p>${featuredPrediction.summary}</p>
        `;
        predictionsContainer.appendChild(featuredElement);
    }

    const otherPredictionsContainer = document.createElement('div');
    otherPredictionsContainer.classList.add('predictions-grid');
    predictionsContainer.appendChild(otherPredictionsContainer);

    otherPredictions.forEach(prediction => {
        const predictionElement = document.createElement('div');
        predictionElement.classList.add('prediction');
        predictionElement.innerHTML = `
            <h3>${prediction.title}</h3>
            <p class="date">${prediction.date}</p>
            <p>${prediction.summary}</p>
        `;
        otherPredictionsContainer.appendChild(predictionElement);
    });

    // Animate predictions on scroll
    const allPredictions = document.querySelectorAll('.prediction');
    const predictionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.1 });

    allPredictions.forEach(prediction => {
        prediction.style.opacity = 0;
        prediction.style.transform = 'translateX(-20px)';
        prediction.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        predictionObserver.observe(prediction);
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
