import { useContext } from 'react';
import { CharacterContext } from '../../context/character.context';
import { iCharacter } from '../../models/character';

export function Actions({ character }: { character: iCharacter }) {
    const { handleTalkButton, handleDieButton } = useContext(CharacterContext);
    return (
        <div className="character__actions">
            <button
                className="character__action btn"
                onClick={() => {
                    handleTalkButton(character);
                }}
            >
                talk
            </button>
            <button
                className="character__action btn"
                onClick={() => {
                    handleDieButton(character);
                }}
            >
                die
            </button>
        </div>
    );
}
