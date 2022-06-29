import { useContext } from 'react';
import { CharacterContext } from '../../context/character.context';
import { iCharacter } from '../../models/character';

export function Comunications() {
    const { comunications, characters } = useContext(CharacterContext);
    const speak = comunications[0];
    const characterName = comunications[1];

    if (characters.length === 0) {
        return <p>Loading</p>;
    } else {
        const character = characters.find(
            (item) => item.name === characterName
        ) as iCharacter;
        return (
            <div className={'comunications' + (speak === 'on' ? ' on' : '')}>
                <p className="comunications__text display-1">
                    {character.sentence}
                </p>
                <img
                    className="comunications__picture"
                    src={'./img/' + character.alias + '.jpg'}
                    alt={character.name + ' ' + character.house}
                />
            </div>
        );
    }
}
