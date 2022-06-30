import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from './card';

// gherkins - GWT
describe('Given the component Card', () => {
    describe('When the component is rendered', () => {
        test('Then screen should have a character name received by props', () => {
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

            render(<Card character={expectedCharacter}></Card>);
            const element = screen.getByText(/name/i);
            expect(element).toBeInTheDocument();
        });

        // test('Then screen should have a thumbs-up icon when the character is alive', () => {
        //     const expectedCharacter = {
        //         name: 'name',
        //         house: 'house',
        //         age: 0,
        //         state: 'alive',
        //         alias: 'alias',
        //         serie: 'GoT',
        //         emoji: 'test',
        //         sentence: 'sentence',
        //         yearsOfReign: 1,
        //         weapon: 'weapon',
        //         skill: 2,
        //         gradeOfBowing: 3,
        //         toWhom: 'toWhom',
        //         squireOf: 'squireOf',
        //     };

        //     const { container } = render(
        //         <Card character={expectedCharacter}></Card>
        //     );
        //     const element = container.getElementsByClassName('fa-thumbs-up');
        //     expect(element).toHaveAttribute('fa-thumbs-up');
        // });
    });
});
