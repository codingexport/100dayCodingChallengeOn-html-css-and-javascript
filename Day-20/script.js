let toggle = document.getElementById('switch');
toggle.addEventListener('click', () => {
    document.body.style.backgroundColor = toggle.checked ? 'black' : 'white';
});
