import { render, screen } from '@testing-library/react';
import { BackCard } from './backcard';
import '@testing-library/jest-dom';

// gherkins - GWT
describe('Given the component BackCard', () => {
    describe('When the component is rendered', () => {
        test('Then screen should have a title Years Of Reign', () => {
            const expectedCharacter = {
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

            render(<BackCard character={expectedCharacter}></BackCard>);
            const element = screen.getByText(/Years Of Reign/i);
            expect(element).toBeInTheDocument();
        });
    });
});
