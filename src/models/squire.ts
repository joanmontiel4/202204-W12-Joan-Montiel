import { Character } from './character';

export class Squire extends Character {
    squireOf: string; //solo puede ser luchador
    gradeOfBowing: number = 0; //Un valor entre 0 y 10
    // #gradeOfBowing: number = 0; //Un valor entre 0 y 10
    // Private identifiers are only available when targeting ECMAScript 2015 and higher.ts(18028)
    sentence = `I'm a loser`;
    emoji = '🛡️';
    constructor(
        name: string,
        house: string,
        age: number,
        alias: string,
        squireOf: string
    ) {
        super(name, house, age, alias);
        this.squireOf = squireOf;
    }

    get gradeOfBow() {
        return this.gradeOfBowing;
    }

    set gradeOfBow(value) {
        if (value >= 0 && value <= 10) {
            this.gradeOfBowing = value;
        }
    }

    // characterOverlay() {
    //     return `
    //     <ul class="list-unstyled">
    //         <li>Sirve a: ${this.squireOf}</li>
    //         <li>Grado de pelotismo: ${this.gradeOfBowing}</li>
    //     </ul>
    // `;
    // }
}
