const multiply = require('./multiply');
describe('test multiply positive scenario',()=>{
    test('multiply 3 by 2 should return 6',()=>{
        expect(multiply(3,2)).toBe(6);
    });
});