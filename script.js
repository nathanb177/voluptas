document.getElementById('yesButton').addEventListener('click', () => {
    document.querySelector('.verification').classList.add('hidden');
    document.querySelector('.content').classList.remove('hidden');
});

document.getElementById('noButton').addEventListener('click', () => {
    alert('Zugriff verweigert. Diese Website ist nur für Erwachsene.');
    window.location.href = 'https://www.google.com';
});
