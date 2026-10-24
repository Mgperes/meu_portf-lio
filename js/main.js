  // Elemento do botão
        const themeToggle = document.getElementById('themeToggle');
        const htmlElement = document.documentElement;
 
        // Verificar preferência salva
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            themeToggle.textContent = 'Tema Claro';
        }
 
        // Toggle ao clicar
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
                themeToggle.textContent = 'Tema Claro';
            } else {
                localStorage.setItem('theme', 'light');
                themeToggle.textContent = 'Tema Noturno';
            }
        });
 
        // Respeitar preferência do sistema (opcional)
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            if (!savedTheme) {
                document.body.classList.add('dark-mode');
                themeToggle.textContent = 'Tema Claro';
            }
        }