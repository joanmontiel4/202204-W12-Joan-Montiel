import { Character } from './character.js';

export class Counselor extends Character {
    toWhom; //rey, luchador, asesor o escudero
    sentence = `I don't know why, but I think I'm gonna die soon`;
    emoji = '🎓';
    constructor(
        name: string,
        family: string,
        age: number,
        alias: string,
        toWhom: string
    ) {
        super(name, family, age, alias);
        this.toWhom = toWhom;
    }

    // characterOverlay() {
    //     return `
    //     <ul class="list-unstyled">
    //         <li>Asesora a: ${this.toWhom}</li>
    //     </ul>
    // `;
    // }
}
