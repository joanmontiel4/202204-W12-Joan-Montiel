import '../../css/styles.css';
import { useContext } from 'react';
import { CharacterContext } from '../../context/character.context';
import { Card } from '../card/card';
import { Comunications } from '../comunications/comunications';

function App() {
    const { characters } = useContext(CharacterContext);
    return (
        <>
            <ul className="characters-list row list-unstyled">
                {characters.map((character) => (
                    <li key={character.name} className="character col">
                        <Card character={character}></Card>
                    </li>
                ))}
            </ul>
            <Comunications></Comunications>
        </>
    );
}

export default App;
