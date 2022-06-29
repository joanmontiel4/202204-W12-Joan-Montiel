import { Character } from './character';

export class King extends Character {
    yearsOfReign;
    sentence = `You're all going to die`;
    emoji = '👑';
    constructor(
        name: string,
        house: string,
        age: number,
        alias: string,
        yearsOfReign: number
    ) {
        super(name, house, age, alias);
        this.yearsOfReign = yearsOfReign;
    }

    // characterOverlay() {
    //     return `
    //     <ul class="list-unstyled">
    //         <li>Años de reinado: ${this.yearsOfReign}</li>
    //     </ul>
    // `;
    // }
}
