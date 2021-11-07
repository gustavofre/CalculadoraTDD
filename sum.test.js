/**
 * @jest-environment jsdom
 */

const soma = require('./calc');

test('Soma dois números', () => {
  expect(soma(1, 2)).toBe(3);
});

test('Subtrai dois números', () => {
    expect(subtrai(2,1).toBe(1));
})

test('Divide dois números', ()=>{
    expect(divide(2,1).toBe(2));
})

test('Multiplca dois números', ()=> {
    expect(multiplica(2,2).toBe());
})

