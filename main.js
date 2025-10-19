// main.js
import { Produkt } from './produkt.js';

const container = document.getElementById('produkty');

const produkt1 = new Produkt('Kniha JavaScriptu', 500, 'purple');
const produkt2 = new Produkt('Soukromý Sešit', 100, 'green');

produkt1.vykresli(container);
produkt2.vykresli(container);

// po kliknutí zlevníme produkt 1
container.addEventListener('click', () => {
    produkt1.zlevni(20);
    container.innerHTML = ''; // vymažeme staré
    produkt1.vykresli(container);
    produkt2.vykresli(container);
});
