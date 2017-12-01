const expect = require('expect');

const {generateMessage} = require('../server/utils/message')

describe('generateMessage', () => {
    it('should generate corret message object', () => {
        from = 'Alon';
        text = 'This is a test';
        var res = generateMessage(from,text);
        
        expect(res).toMatchObject({from, text});
        expect(typeof res.createdAt).toBe('number');
    });
});