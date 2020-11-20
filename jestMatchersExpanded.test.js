const multiply = require('./multiply');
// string matchers:

test('There is a pool in liverpool',()=>{
    expect('liverpool').toMatch(/pool/);
});

test('There is no pol in liverpool',()=>{
    expect('liverpool').not.toMatch(/pol/);
});

// number matchers:

test('multiply 3 by 2 should return 6',()=>{
    expect(multiply(3,2)).toBe(6);
    expect(multiply(3,2)).toBeGreaterThan(5);
    expect(multiply(3,2)).toBeLessThan(7);
    expect(multiply(3,2)).toBeLessThanOrEqual(6);
});

//Truthiness Matchers:

test('null check',()=>{
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).toBeFalsy();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
})