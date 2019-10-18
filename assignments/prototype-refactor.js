class GameObject {
  constructor (options) {
      this.createdAt = options.createdAt;
      this.dimensions = options.dimensions;
  }
 destroy() {
      return `${this.name} was removed from the game.`;
  }
  /*env: { es6: true, browser: true},*/
}


class CharacterStats extends GameObject {
  constructor (characterStatsOptions) {
  super (characterStatsOptions);
  this.hp = characterStatsOptions.hp;
  this.name = characterStatsOptions.hp;
  }
  takeDamage() {
      return `${this.name} took damage.`;
  }
}


//CharacterStats.prototype = Object.create(GameObject.prototype)


class Humanoid extends CharacterStats {
  constructor (humanoidOptions) {
      super (humanoidOptions);
      this.faction = humanoidOptions.faction;
      this.weapons = humanoidOptions.weapons;
      this.language = humanoidOptions.language;
  }

//Hymanoid.prototype = Object.create(CharacterStats.prptptype);
greet () {
  return `${this.name} offers a greeting in ${this.language}.`;
  }
}

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
      length: 2,
      width: 1,
      height: 1
  },
  hp: 5,
  name: 'Bruce',
  faction: "Mage Guild",
  weapons: ['Staff of Shamalama'],
  language: 'Common Tongue'
});



const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
      length: 2,
      width: 2,
      height:2,
  },
  hp: 15,
  name: 'Sir Mustachio',
  faction: 'The Round Table',
  weapons: ['Giant Sword', 'Shield'],
  language: 'Common Tongue'
});


const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
      length: 1,
      width: 2,
      height: 4,
  },
  hp: 10,
  name: 'Lilith',
  faction: 'Forest Kingdom',
  weapons: ['Bow', 'Dagger'],
});



console.log(GameObject);
console.log(mage.createdAt);  //Today's date
console.log(archer.dimensions);   //{length: 1, width: 2, height: 4 }
console.log(swordsman.hp);  //15
console.log(mage.name);   //Bruce
console.log(swordsman.faction);   //The Round Table
console.log(mage.weapons);   //Staff of Shamalama
console.log(archer.language);   //Elvish
console.log(archer.greet());   //Lilith offers a greeting in Elvish.
console.log(mage.takeDamage());   //Bruce took damage.
console.log(swordsman.destroy());   //Sir Mustahio was removed from the game.




/*CODE here for your Lambda Classes*/