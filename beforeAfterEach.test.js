const { TestScheduler } = require("jest");

const setupFirst = ()=> console.log('Setting up the before test preconditions');
const tearDown = ()=> console.log('clearing the junk and closing the test');

describe('new account creation test',()=>{
    
    beforeEach(()=> setupFirst());
    
    
    test('test new account1 is created',()=>{
      const account = 'account1';
      expect(account).toEqual('account1');  
    });

    test('test new account2 is created',()=>{
        const account = 'account2';
        expect(account).toEqual('account2');  
     });

    afterEach(()=> tearDown());
});