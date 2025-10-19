// produkt.js
export class Produkt {
    constructor(nazev, cena, barva) {
        this.nazev = nazev;
        this.cena = cena;
        this.barva = barva;
    }

    popis() {
        return `${this.nazev} - ${this.cena} Kč`;
    }

    zlevni(procento) {
        this.cena = this.cena * (1 - procento / 100);
    }

    vykresli(parent) {
        const div = document.createElement('div');
        div.style.backgroundColor = this.barva;
        div.style.color = 'white';
        div.style.padding = '10px';
        div.style.margin = '5px';
        div.style.width = '200px';
        div.style.fontFamily = 'Arial';
        div.textContent = this.popis();
        parent.appendChild(div);
    }
}
