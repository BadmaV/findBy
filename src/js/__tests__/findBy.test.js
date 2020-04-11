import { findBy } from '../findBy';

const arr = [
  { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
  { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
  { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  { name: 'удача', type: 'attack', description: 'Повышает суперспособность' },
];

const severalResults = [
  { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
  { name: 'удача', type: 'attack', description: 'Повышает суперспособность' },
];

test('find by item', () => {
  const finder1 = findBy('type', 'attack');
  const finder2 = findBy('type');
  const finder3 = findBy();
  const finder4 = findBy('type', 'attack', 'name', 'урон');

  const result1 = arr.filter(finder1);
  const result2 = arr.filter(finder2);
  const result3 = arr.filter(finder3);
  const result4 = arr.filter(finder4);

  expect(result1).toEqual(severalResults);
  expect(result2).toEqual([]);
  expect(result3[0].type).toEqual('character');
  expect(result4[0].name).toEqual('заклинание');
});
