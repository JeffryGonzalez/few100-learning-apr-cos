describe('functions', () => {

    describe('declaring them', () => {
        it('two different kinds and three ways', () => {


            // named functions
            function add(a: number, b: number): number {
                return a + b;
            }

            function logIt(message: string): void {
                console.log(message);
            }

            // anonymous functions

            const subtract = function (a: number, b: number): number {
                return a - b;
            }

            const multiply = (a: number, b: number) => a * b;

            const divide = (a: number, b: number) => {
                if (b === 0) {
                    console.log('You almost opened a black hole! You cannot divide by zero!');
                    return;
                } else {
                    return a / b;
                }
            }
            expect(add(2, 2)).toBe(4);
            expect(subtract(10, 2)).toBe(8);
            expect(multiply(5, 5)).toBe(25);
            expect(divide(20, 2)).toBe(10);
            let math = subtract;
            expect(math(10, 2)).toBe(8);
            math = divide;
            expect(math(100, 50)).toBe(2);
        });

    });
    describe('higher ordered functions', () => {
        it('a function that takes an argument of a function', () => {

            function doIt(message: string, decorator: (x: string) => string): void {
                console.log(decorator(message));
            }

            doIt('Hello World!', (s) => `***${s}***`);

            doIt('hello world', (s) => s.toUpperCase());

            const sum = [1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((s, n) => s + n);
            expect(sum).toBe(45);

            function isEven(someNumber: number) {
                return someNumber % 2 === 0;
            }
            const evens = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(isEven);
            expect(evens).toEqual([2, 4, 6, 8]);
        });
        describe('a function that returns a function', () => {

            it('old skool function', () => {
                function tagMaker(tag: string, content: string) {
                    return `<${tag}>${content}</${tag}>`;
                }

                expect(tagMaker('h1', 'dog')).toBe('<h1>dog</h1>');
                expect(tagMaker('h1', 'cat')).toBe('<h1>cat</h1>');
                expect(tagMaker('p', 'story')).toBe('<p>story</p>');
            });
            it('an oop approach', () => {
                class TagMaker {
                    private tag: string;

                    constructor(tag: string) {
                        this.tag = tag;
                    }

                    make(element: string) {
                        return `<${this.tag}>${element}</${this.tag}>`
                    }

                }

                const h1Maker = new TagMaker('h1');
                const pMaker = new TagMaker('p');

                expect(h1Maker.make('dog')).toBe('<h1>dog</h1>');
                expect(h1Maker.make('cat')).toBe('<h1>cat</h1>');
                expect(pMaker.make('story')).toBe('<p>story</p>');

            });
            it('higher-ordered function version', () => {

                function tagMaker(tag: string): (content: string) => string {
                    return (content) => `<${tag}>${content}</${tag}>`;
                }

                const h1Maker = tagMaker('h1');
                const pMaker = tagMaker('p');

                expect(h1Maker('dog')).toBe('<h1>dog</h1>');
                expect(h1Maker('cat')).toBe('<h1>cat</h1>');
                expect(pMaker('story')).toBe('<p>story</p>')

            });

        });

    });
    describe('arguments to functions', () => {
        it('optional and default arguments', () => {

            function formatName(first: string, last: string, mi?: string) {
                let formattedName = `${last}, ${first}`;
                if (mi) {
                    formattedName += ' ' + mi + '.';
                }
                return formattedName;
            }

            expect(formatName('Han', 'Solo')).toBe('Solo, Han');
            expect(formatName('Han', 'Solo', 'D')).toBe('Solo, Han D.');

            function addThem(a: number = 10, b: number = 20) {
                return a + b;
            }

            expect(addThem(2, 2)).toBe(4);
            expect(addThem(5)).toBe(25);
            expect(addThem(undefined, 10)).toBe(20); // passing in undefined (and only undefined) says use the default for this parameter.

        });

    });
});