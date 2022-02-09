import Character, {
  Bowman, Swordsman, Magician, Daemon, Undead, Zombie,
} from '../app';

it('Character', () => {
  const result = new Character('мечник1', 'Bowman');
  expect(result.name).toBe('мечник1');
  expect(result.type).toBe('Bowman');
  expect(result.health).toBe(100);
  expect(result.level).toBe(1);
});

it('Character', () => {
  function checkName() {
    return new Character('м', 'Bowman');
  }
  expect(checkName).toThrow();
});

it('Character', () => {
  function checkType() {
    return new Character('мечник1', 15);
  }
  expect(checkType).toThrow();
});

it('Bowman', () => {
  const result = new Bowman('мечник1', 'Bowman');
  expect(result).toEqual({
    name: 'мечник1', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  });
});

it('Swordsman', () => {
  const result = new Swordsman('мечник1', 'Swordsman');
  expect(result).toEqual({
    name: 'мечник1', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  });
});

it('Magician', () => {
  const result = new Magician('Magician', 'Magician');
  expect(result).toEqual({
    name: 'Magician', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  });
});

it('Daemon', () => {
  const result = new Daemon('Daemon', 'Daemon');
  expect(result).toEqual({
    name: 'Daemon', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  });
});

it('Undead', () => {
  const result = new Undead('Undead', 'Undead');
  expect(result).toEqual({
    name: 'Undead', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  });
});

it('Zombie', () => {
  const result = new Zombie('Zombie', 'Zombie');
  expect(result).toEqual({
    name: 'Zombie', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  });
});
