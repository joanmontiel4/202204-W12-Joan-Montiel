import { createContext } from 'react';
import { iCharacter } from '../models/character';

const initialContext: {
    characters: Array<iCharacter>;
} = {
    characters: [],
};

export const CharacterContext = createContext(initialContext);
