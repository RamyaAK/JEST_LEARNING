const setupFirst = ()=> console.log('Setting up all the preconditions at once in the beginning');
const tearDown = ()=> console.log('Closing the test once after all the tests are executed');

describe('new account creation test',()=>{
    
    beforeAll(()=> setupFirst());
    
    
    test('test new account1 is created',()=>{
      const account = 'account1';
      expect(account).toEqual('account1');  
    });

    test('test new account2 is created',()=>{
        const account = 'account2';
        expect(account).toEqual('account2');  
     });

    afterAll(()=> tearDown());
});