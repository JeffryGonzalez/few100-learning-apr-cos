describe('variables and types', () => {

    describe('declaring variables', () => {
        it('using the let binding', () => {
            let x: string | number;

            x = 'dog';

            x = 12;

            let y: string | string[] = 'Bird'; // initializing.

            y = ['dog', 'cat', 'mouse'];

            // x = [];

        });
        it('has a const', () => {
            const PI = 3.14; // You must initialize.

            const friends = ['Sean', 'Amy', 'David'];

            friends[2] = 'Andrew';
            // friends = [];

            const movie = {
                title: 'Thor',
                yearReleased: 2017
            };

            movie.title = 'Thor: Ragnorak';

            movie.yearReleased = 2018;

            expect(movie.title).toBe('Thor: Ragnorak');

        });
        it('here is why var is bad and should not be used.', () => {
            const age = 22;

            if (age > 21) {
                // tslint:disable-next-line: no-var-keyword
                var message = 'Old Enough';
            }

            expect(message).toBe('Old Enough');
        });
        it('let fixes this', () => {
            const age = 22;
            let message: string;
            if (age > 21) {
                message = 'Old Enough';
            }
            // tslint:disable-next-line: no-var-keyword
            expect(message).toBe('Old Enough');
        });

    });
});
describe('literals', () => {
    it('has string literals', () => {
        const message = 'She told me "You look nice!"';
        const message2 = 'The author was Flannery O\'Connor'

        // tslint:disable-next-line: quotemark
        const message3 = "His name is Bill O'Brien";

    });
    it('has literal strings', () => {
        const message = `She told me "You look nice today"`;
        const message3 = `His name is Bill O'Brien`;

        const story = `Chapter 1.

        It was a dark and stormy night.

        The end.`;

        const someMarkup = `<div>
        <p>Some Text Here</p>
        </div>`;

        const name = 'Bob';
        const age = 32;

        const info = 'His name is ' + name + ' and his age is ' + age + '.';
        const info2 = `His name is ${name} and his age is ${age}.`;

        expect(info).toEqual(info2);

    });
    it('has number literals', () => {
        const n1 = 1;
        const n2 = 1.3;
        const n3 = 0xff; // Hexadecimal (base 16)
        const n4 = 0b10101; // Binary (base 2)
        const n5 = 0o23; // octal
        const big = 123_492_038_203;
        expect(big).toEqual(123492038203);
    });

});
