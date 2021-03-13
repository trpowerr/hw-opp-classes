/* eslint-disable no-unused-vars */
import Character from '../js/Character';

test('input validation TYPE', () => {
  expect(() => {
    const received = new Character('Misha', 'Any');
  }).toThrow('Такого персонажа не существует!');
});

test('input validation NAME', () => {
  expect(() => {
    const received = new Character('MishaMisha!', 'Daemon');
  }).toThrow('name min-2 символа, max - 10!');
});
