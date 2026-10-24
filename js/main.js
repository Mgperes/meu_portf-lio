const themeToggle = document.getElementById('themeToggle');
const moonIcon = document.querySelector('.moon-icon');
const sunIcon = document.querySelector('.sun-icon');

themeToggle.addEventListener('click', () => {
    const darkMode = document.body.classList.toggle('dark-mode');

    moonIcon.classList.toggle('is-hidden', darkMode);
    sunIcon.classList.toggle('is-hidden', !darkMode);

    themeToggle.setAttribute(
        'aria-label',
        darkMode ? 'Ativar modo claro' : 'Ativar modo escuro'
    );
});