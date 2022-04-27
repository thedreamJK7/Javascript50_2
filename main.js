window.addEventListener('DOMContentLoaded', () => {
    const icon = document.querySelector('.icon'),
        search = document.querySelector('.search');

    icon.addEventListener('click', ()=> {
        search.classList.toggle('active');
    })
})