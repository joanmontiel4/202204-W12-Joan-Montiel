import { Character } from './character.js';

export class Fighter extends Character {
    weapon: string;
    skill: number = 0;
    sentence = 'Primero pego y luego pregunto';
    emoji = '🗡';
    constructor(
        name: string,
        house: string,
        age: number,
        alias: string,
        weapon: string
    ) {
        super(name, house, age, alias);
        this.weapon = weapon;
    }

    get skills() {
        return this.skill;
    }

    set skills(value: number) {
        if (value >= 0 && value <= 10) {
            this.skill = value;
        }
    }

    characterOverlay() {
        return `
        <ul class="list-unstyled">
            <li>Arma que usa: ${this.weapon}</li>
            <li>Destreza: ${this.skill}</li>
        </ul>
    `;
    }
}
