import { render, screen } from '@testing-library/react';
import { Actions } from './actions';
import '@testing-library/jest-dom';
import { CharacterContext } from '../../context/character.context';
import userEvent from '@testing-library/user-event';

// gherkins - GWT

const mockCharacter = {
    name: 'name',
    house: 'house',
    age: 0,
    state: 'alive',
    alias: 'alias',
    serie: 'GoT',
    emoji: 'test',
    sentence: 'sentence',
    yearsOfReign: 1,
    weapon: 'weapon',
    skill: 2,
    gradeOfBowing: 3,
    toWhom: 'toWhom',
    squireOf: 'squireOf',
};

const mockContext = {
    characters: [mockCharacter],
    comunications: ['off', 'Jaime'],
    handleTalkButton: jest.fn(),
    handleDieButton: jest.fn(),
};
describe('Given the component Actions', () => {
    describe('When the component is rendered', () => {
        test('Then screen should have a talk button', () => {
            render(
                <CharacterContext.Provider value={mockContext}>
                    <Actions character={mockCharacter}></Actions>
                </CharacterContext.Provider>
            );
            const talkButton = screen.getByText('talk');
            expect(talkButton).toBeInTheDocument();
        });
        describe('When the user clicks the talk button', () => {
            test('Then the handler should be called', () => {
                render(
                    <CharacterContext.Provider value={mockContext}>
                        <Actions character={mockCharacter}></Actions>
                    </CharacterContext.Provider>
                );
                const talkButton = screen.getByText('talk');
                userEvent.click(talkButton);
                expect(mockContext.handleTalkButton).toBeCalledWith(
                    mockCharacter
                );
            });
        });
        describe('When the user clicks the die button', () => {
            test('Then the handler should be called', () => {
                render(
                    <CharacterContext.Provider value={mockContext}>
                        <Actions character={mockCharacter}></Actions>
                    </CharacterContext.Provider>
                );
                const talkButton = screen.getByText('die');
                userEvent.click(talkButton);
                expect(mockContext.handleDieButton).toBeCalledWith(
                    mockCharacter
                );
            });
        });
    });
});
