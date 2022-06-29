export class Character implements iCharacter {
    name;
    house;
    age;
    state = 'alive';
    alias;
    serie = 'Game of Thrones';
    emoji = '';
    sentence = '';
    constructor(name: string, house: string, age: number, alias: string) {
        this.name = name;
        this.house = house;
        this.age = age;
        this.alias = alias;
    }
}

export interface iCharacter {
    name: string;
    house: string;
    age: number;
    state: string;
    alias: string;
    serie: string;
    emoji: string;
    sentence: string;
    yearsOfReign?: number;
    weapon?: string;
    skill?: number;
    gradeOfBowing?: number;
    toWhom?: string;
    squireOf?: string;
}
