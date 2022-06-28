import { useEffect, useState } from 'react';
import { iCharacter } from '../models/character';
// import * as api from '../services/http-tasks';
import { CharacterContext } from './character.context';
import { listOfCharacters } from '../data/characters';

export function CharacterProvider({ children }: { children: JSX.Element }) {
    // Model

    const initialState: Array<iCharacter> = [];
    const [characters, setCharacters] = useState(initialState);

    useEffect(() => {
        setCharacters(listOfCharacters);
    }, []);

    // Controller

    const context = {
        characters,
    };
    return (
        <CharacterContext.Provider value={context}>
            {children}
        </CharacterContext.Provider>
    );
}
