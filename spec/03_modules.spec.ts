import { Album, Song } from '../src/music';
import { Employee, _Person, Retiree } from '../src/hr';






describe('modules', () => {
    // a module is a typescript source-code file that *exports* one or more things.
    // anything that exists inside a module is basically private to that module until you export it.
    // every file that needs a thingy (type, function, const, variable, interface, class, etc.) that exists in another
    // module must explicitly import it.

    it('using a class from a module', () => {
        const album = new Album();
        album.title = 'Kamaal the Abstract';
        album.artist = 'Q-Tip';
        const info = album.getInfo();
        expect(info).toBe('Kamaal the Abstract by Q-Tip');
    });

    it('using another class from another module', () => {
        const song = new Song('Feelin\'', 'Q-Tip');
        song.duration = '3.58';

        expect(song.artist).toBe('Q-Tip');

        // expect(song).toEqual({
        //     title: 'Feelin\'',
        //     artist: 'Q-Tip',
        //     duration: '3.58'
        // })
        function doSomething(theSong: { title: string, artist: string }) {

        }

        doSomething(song);
        doSomething(new Album());

    });

    describe('hr stuff', () => {

        it('has an employee', () => {
            const bob = new Employee();
            bob.id = '122';
            bob.firstName = 'Robert';
            bob.lastName = 'Smith';
            bob.job = 'Singer'
            bob.salary = 180_000;
            bob.workFromHomeDay = 'Friday (he\'s in love)';
            const info = bob.getInfo();

        });
        it('has a retiree', () => {
            const jill = new Retiree();
            jill.firstName = 'Jill';
            jill.lastName = 'Jones';
            jill.pension = 220_000;

            // const ray = new Person();
        });
    });
});