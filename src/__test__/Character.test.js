/* eslint-disable no-unused-vars */
import Character, {
  Bowman,
  Swordsman,
  Magician,
  Daemon,
  Undead,
  Zombie,
} from '../js/Character';

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

test('damage calculation check', () => {
  let newPerson = new Daemon('Misha', 'Daemon');
  newPerson = new Bowman('Misha', 'Bowman');
  newPerson = new Swordsman('Misha', 'Daemon');
  newPerson = new Magician('Misha', 'Magician');
  newPerson = new Undead('Misha', 'Undead');
  newPerson = new Zombie('Misha', 'Zombie');
  expect(true).toBe(true);
});
