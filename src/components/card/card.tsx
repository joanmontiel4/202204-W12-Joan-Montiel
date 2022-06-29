import { iCharacter } from '../../models/character';
import { BackCard } from '../backcard/backcard';

export function Card({ character }: { character: iCharacter }) {
    return (
        <div className="card character__card">
            <img
                src={'./img/' + character.alias + '.jpg'}
                alt={character.name + ' ' + character.house}
                className={
                    'character__picture card-img-top' +
                    (character.state === 'dead' && ' rotate')
                }
            />
            <div className="card-body">
                <h2 className="character__name card-title h4">
                    {character.name + ' ' + character.house}
                </h2>
                <div className="character__info">
                    <ul className="list-unstyled">
                        <li>{'Age: ' + character.age}</li>
                        <li>
                            State:{' '}
                            {character.state === 'alive' ? (
                                <i className="fas fa-thumbs-up"></i>
                            ) : (
                                <i className="fas fa-thumbs-down"></i>
                            )}
                        </li>
                    </ul>
                </div>
                <BackCard character={character}></BackCard>
            </div>
            <i className="emoji">{character.emoji}</i>
        </div>
    );
}
