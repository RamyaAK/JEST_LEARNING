const multiply = require('./multiply');
describe('test multiply positive scenario',()=>{
    
    test('multiply 3 by 2 should return 6',()=>{
        expect(multiply(3,2)).toBe(6);
    });

    test('multiply negative scenario i.e multiply 5 by 2 should not be equal to 7',()=>{
        expect(multiply(5,2)).not.toBe(7);
    });
    
    test('Objects Comparision Test',()=>{
       const data = {'first':"1"};
       data['second']= "2";
       expect(data).toEqual({"first":"1", "second":"2"});
    });
});