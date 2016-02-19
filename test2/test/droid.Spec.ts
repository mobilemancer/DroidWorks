import {Droid} from 'src/views/droid';

describe('a Droid', () => {
    var droid;

    beforeEach(() => {
        droid = new Droid();
        console.log(droid.height);
    });

    it('contains default properties', () => {
        console.log(droid);
        expect(droid.height).toBeDefined();
    });

    it('can cahnge editable', () => {
        console.log(droid);
        var _canEdit = droid.apa;
        expect(_canEdit).toBeDefined();
    });


});