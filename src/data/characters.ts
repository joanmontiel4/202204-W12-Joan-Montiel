import { King } from '../models/king';
import { Fighter } from '../models/fighter';
import { Counselor } from '../models/counselor';
import { Squire } from '../models/squire';

const joffrey = new King('Joffrey', 'Baratheon', 14, 'joffrey', 1);
const jaime = new Fighter('Jaime', 'Lannister', 33, 'jaime', 'espada');
jaime.skill = 9;
const daenerys = new Fighter(
    'Daenerys',
    'Targaryen',
    16,
    'daenerys',
    'dragones'
);
daenerys.skills = 9;
const tyrion = new Counselor('Tyrion', 'Lannister', 30, 'tyrion', 'Daenerys');
const bronn = new Squire('Bronn', 'Stokeworth', 32, 'bronn', 'Jaime');
bronn.gradeOfBowing = 8;

export const listOfCharacters = [joffrey, jaime, daenerys, tyrion, bronn];
