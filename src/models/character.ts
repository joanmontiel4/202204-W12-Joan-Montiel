export class Character implements iCharacter {
    name;
    house;
    age;
    state = 'alive';
    alias;
    serie = 'Game of Thrones';
    constructor(name: string, house: string, age: number, alias: string) {
        this.name = name;
        this.house = house;
        this.age = age;
        this.alias = alias;
    }

    // thumbsUpOrDown() {
    //     if (this.state === 'alive') {
    //         return '<i class="fas fa-thumbs-up"></i>';
    //     } else {
    //         return '<i class="fas fa-thumbs-down"></i>';
    //     }
    // }

    // characterActions() {
    //     return `
    //         <button class="character__action btn btn-talk-${this.alias}">
    //             habla
    //         </button>
    //         <button class="character__action btn btn-die-${this.alias}">
    //             muere
    //         </button>
    //     `;
    // }

    // renderComunications() {
    //     const speakCard = document.querySelector('.comunications');
    //     speakCard.innerHTML = `
    //         <p class="comunications__text display-1">
    //              ${this.sentence}
    //         </p>
    //         <img
    //             class="comunications__picture"
    //             src="./src/img/${this.alias}.jpg"
    //             alt="${this.name} ${this.house}"
    //         />
    //     `;
    // }

    // speak() {
    //     if (this.state === 'alive') {
    //         this.renderComunications();
    //         const speakCard = document.querySelector('.comunications');
    //         speakCard.classList.toggle('on');
    //         setTimeout(() => {
    //             speakCard.classList.toggle('on');
    //         }, 2000);
    //     }
    // }

    // die() {
    //     this.state = 'dead';
    //     const ageAndState = document.querySelector(`.thumbs-${this.alias}`);
    //     ageAndState.innerHTML = `
    //             <ul class="list-unstyled">
    //                 <li>Edad: ${this.age} años</li>
    //                 <li>
    //                     Estado:
    //                     ${this.thumbsUpOrDown()}
    //                 </li>
    //             </ul>
    //         `;

    //     const img = document.querySelector(`.img-${this.alias}`);
    //     img.style.transform = 'rotate(180deg)';
    // }
}

export interface iCharacter {
    name: string;
    house: string;
    age: number;
    state: string;
    alias: string;
    serie: string;
}
