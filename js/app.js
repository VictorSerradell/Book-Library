const displayBtn = document.querySelector('.button');
const form = document.querySelector('.form');
const closed = document.querySelector('.close');
const container = document.querySelector('.container');
const moon = document.querySelector('.moon');



displayBtn.addEventListener('click', () => {
    form.style.display = 'block';
    displayBtn.style.display = 'none';
});

closed.addEventListener('click', () => {
    form.style.display = 'none';
    displayBtn.style.display = 'block';
});

moon.addEventListener('click', () => {
    container.classList.toggle('dark-mode');
})