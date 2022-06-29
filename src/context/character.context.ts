import { createContext } from 'react';
import { iCharacter } from '../models/character';

const initialContext: {
    characters: Array<iCharacter>;
    comunications: Array<string>;
    handleTalkButton(character: iCharacter): void;
    handleDieButton(character: iCharacter): void;
} = {
    characters: [],
    comunications: ['off', 'Jaime'],
    handleTalkButton: (character) => {},
    handleDieButton: (character) => {},
};

export const CharacterContext = createContext(initialContext);
