import { iCharacter } from '../../models/character';
import { Actions } from '../actions/actions';

export function BackCard({ character }: { character: iCharacter }) {
    return (
        <div className="character__overlay">
            <ul className="list-unstyled">
                {character.hasOwnProperty('yearsOfReign') && (
                    <li>Years of reign: {character.yearsOfReign}</li>
                )}
                {character.hasOwnProperty('weapon') && (
                    <li>Weapon: {character.weapon}</li>
                )}
                {character.hasOwnProperty('skill') && (
                    <li>Skill: {character.skill}</li>
                )}
                {character.hasOwnProperty('gradeOfBowing') && (
                    <li>Grade of Bowing: {character.gradeOfBowing}</li>
                )}
                {character.hasOwnProperty('toWhom') && (
                    <li>Advisor to: {character.toWhom}</li>
                )}
                {character.hasOwnProperty('squireOf') && (
                    <li>Squire of: {character.squireOf}</li>
                )}
            </ul>
            <Actions character={character}></Actions>
        </div>
    );
}
