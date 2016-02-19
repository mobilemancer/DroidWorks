import {Droid} from 'src/views/droid';

describe('a Droid', () => {
    var droid;

    beforeEach(() => {
        droid = new Droid();
    });

    it('contains default properties', () => {
        expect(droid.height).toBeDefined();
    });

});