import "./styles.css";
import { loadHome } from './module/home.js';
import { loadMenu } from './module/menu.js';
import { loadAbout } from './module/about.js';
import { loadPage } from './module/pageLoader.js';

const contentDiv = document.getElementById('content');

// Функция для загрузки содержимого вкладки
function loadTab(tabFunction) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    loadPage(tabFunction);
}

// Обработчики событий для кнопок навигации
document.getElementById('home-btn').addEventListener('click', () => loadTab(loadHome));
document.getElementById('menu-btn').addEventListener('click', () => loadTab(loadMenu));
document.getElementById('about-btn').addEventListener('click', () => loadTab(loadAbout));

// Загрузка "главная страница"
document.addEventListener('DOMContentLoaded', () => {
    loadTab(loadHome);
});