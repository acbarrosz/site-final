// script.js
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('.block').forEach(block => block.classList.toggle('dark-mode'));
    document.querySelectorAll('header, footer').forEach(element => element.classList.toggle('dark-mode'));
}

document.getElementById("increase-font-size").addEventListener("click", function() {
    changeFontSize(1);
});

document.getElementById("decrease-font-size").addEventListener("click", function() {
    changeFontSize(-1);
});

function changeFontSize(step) {
    var elements = document.querySelectorAll('body, body *');
    elements.forEach(element => {
        var currentFontSize = parseFloat(getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize + step;
        element.style.fontSize = newFontSize + "px";
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const colorFilterSelect = document.getElementById('color-filter');
    colorFilterSelect.addEventListener('change', (event) => {
        const selectedFilter = event.target.value;
        document.body.className = ''; // Reseta todas as classes
        document.body.classList.add(`${selectedFilter}-filter`);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    new window.VLibras.Widget('https://vlibras.gov.br/app');
});
