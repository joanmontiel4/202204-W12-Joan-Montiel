import { useEffect, useState } from 'react';
import { iCharacter } from '../models/character';
// import * as api from '../services/http-tasks';
import { CharacterContext } from './character.context';
import { listOfCharacters } from '../data/characters';

export function CharacterProvider({ children }: { children: JSX.Element }) {
    // Model

    const initialState: Array<iCharacter> = [];
    const initialComunicationsState: Array<string> = ['off', 'Jaime'];
    const [characters, setCharacters] = useState(initialState);
    const [comunications, setComunications] = useState(
        initialComunicationsState
    );

    useEffect(() => {
        setCharacters(listOfCharacters);
    }, []);

    // Controller

    const handleTalkButton = (character: iCharacter) => {
        setComunications(['on', character.name]);
        setTimeout(() => {
            setComunications(['off', character.name]);
        }, 2000);
    };

    const handleDieButton = (character: iCharacter) => {
        setCharacters(
            characters.map((item) =>
                item.name === character.name ? { ...item, state: 'dead' } : item
            )
        );
    };

    const context = {
        characters,
        comunications,
        handleTalkButton,
        handleDieButton,
    };
    return (
        <CharacterContext.Provider value={context}>
            {children}
        </CharacterContext.Provider>
    );
}
