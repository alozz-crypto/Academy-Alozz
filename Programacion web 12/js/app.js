// Cargar Header y Footer en TODAS las páginas
window.addEventListener('DOMContentLoaded', () => {
    fetch('../components/header.html')
        .then(response => response.text())
        .then(data => document.getElementById('header').innerHTML = data);

    fetch('../components/footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('footer').innerHTML = data);
});