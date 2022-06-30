import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useContext } from 'react';
import { CharacterProvider } from '../context/character.provider';
import { CharacterContext } from './character.context';
import userEvent from '@testing-library/user-event';

describe('Given the context CharacterContext', () => {
    describe('When it is used by a component', () => {
        // Arrange
        let TestComponent: () => JSX.Element;
        beforeEach(() => {
            TestComponent = () => {
                const { characters, handleTalkButton, handleDieButton } =
                    useContext(CharacterContext);
                const character = characters[0];

                return (
                    <>
                        {characters.length && ( //Important to add this line, or not working
                            <>
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
                                <div className="character__info">
                                    <ul className="list-unstyled">
                                        <li>{'Age: ' + character.age}</li>
                                        <li>
                                            State:{' '}
                                            {character.state === 'alive' ? (
                                                <i className="fas fa-thumbs-up">
                                                    test-alive
                                                </i>
                                            ) : (
                                                <i className="fas fa-thumbs-down">
                                                    test-dead
                                                </i>
                                            )}
                                        </li>
                                    </ul>
                                </div>
                            </>
                        )}
                    </>
                );
            };
        });
        test('Then if click talk button, test-dead text should appear', async () => {
            let button;
            render(
                <CharacterProvider>
                    <TestComponent></TestComponent>
                </CharacterProvider>
            );
            button = await screen.findByText('die');
            expect(button).toBeInTheDocument();
            const element = screen.getByText('test-alive');
            expect(element).toBeInTheDocument();
            userEvent.click(button);
            const newElement = await screen.findByText('test-dead');
            expect(newElement).toBeInTheDocument();
        });
    });
});
