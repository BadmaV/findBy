const findBy = (item1, item2) => (x) => x[item1] === item2;

const finder = findBy('type', 'attack');
const results = [
  { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
  { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
  { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  {name: 'удача', type: 'attack', description: 'Повышает суперсбособность' },
].filter(finder);

export { results, findBy };