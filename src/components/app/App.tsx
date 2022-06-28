import '../../css/styles.css';
import { useContext } from 'react';
import { CharacterContext } from '../../context/character.context';
import { Card } from '../card/card';

function App() {
    const { characters } = useContext(CharacterContext);
    return (
        <ul className="characters-list row list-unstyled">
            {characters.map((item) => {
                <li key={item.name} className="character col">
                    <Card></Card>
                </li>;
            })}
        </ul>
    );
}

export default App;
