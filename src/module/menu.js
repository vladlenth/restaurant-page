import pasta from '../assets/menu-img/pasta.jpg';
import pizza from '../assets/menu-img/pizza.jpg';
import lasagne from '../assets/menu-img/lazagne.jpg';

export function loadMenu() {
    const menuDiv = document.createElement('div');
    menuDiv.innerHTML = `
        <h1>Меню</h1>
        <ul class="menu-list">
            <li>Pasta<br> <img src="${pasta}" alt="pasta" width="200"></li>
            <li>Pizza<br> <img src="${pizza}" alt="pizza" width="200"></li>
            <li>Lasagne<br> <img src="${lasagne}" alt="lasagne" width="200"></li>
        </ul>
    `;
    menuDiv.classList.add('tab-content');
    return menuDiv;
}