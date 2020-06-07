class Player {
  constructor(name, type) {
    console.log("player", this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`HI I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log("wizard", this);
  }
  play() {
    console.log(`WEEEE I'm a  ${this.type}`);
  }
}
