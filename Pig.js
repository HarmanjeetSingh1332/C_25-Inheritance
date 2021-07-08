class Pig extends BaseClass {
    constructor(x, y) {
      super(x, y, 60, 60);
      this.width = 60;
      this.height = 60;

      this.image = loadImage("sprites/enemy.png");
    }
  }
