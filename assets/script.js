document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('theme-toggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    function setTheme(dark) {
        if (dark) {
            document.body.classList.add('dark-mode');
            if (toggleBtn) toggleBtn.textContent = '☀️ Light Mode';
        } else {
            document.body.classList.remove('dark-mode');
            if (toggleBtn) toggleBtn.textContent = '🌙 Dark Mode';
        }
    }

    // Check local storage for theme preference or use system preference
    setTheme(localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && prefersDark));

    if (toggleBtn) {
        toggleBtn.onclick = function() {
            const isDark = document.body.classList.toggle('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            toggleBtn.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
        };
    }
});