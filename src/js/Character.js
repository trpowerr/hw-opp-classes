/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */
const arrPerson = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('name min-2 символа, max - 10!');
    }
    if (!arrPerson.includes(type)) {
      throw new Error('Такого персонажа не существует!');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}

class Bowman extends Character {
  constructor(name) {
    super(name);
    this.type = 'Bowman';
    this.attack = 25;
    this.defence = 25;
  }
}

class Swordman extends Character {
  constructor(name) {
    super(name);
    this.type = 'Swordman';
    this.attack = 40;
    this.defence = 10;
  }
}

class Magician extends Character {
  constructor(name) {
    super(name);
    this.type = 'Magician';
    this.attack = 10;
    this.defence = 40;
  }
}

class Undead extends Character {
  constructor(name) {
    super(name);
    this.type = 'Undead';
    this.attack = 25;
    this.defence = 25;
  }
}

class Zombie extends Character {
  constructor(name) {
    super(name);
    this.type = 'Zombie';
    this.attack = 40;
    this.defence = 10;
  }
}

class Daemon extends Character {
  constructor(name) {
    super(name);
    this.type = 'Daemon';
    this.attack = 10;
    this.defence = 40;
  }
}
