import generateAnimations from './animations/index'
import Player from './objects/Player'

class Dino extends Phaser.Scene {
  constructor() {
    super("Dino");
  }

  preload() {
// This is where we can preload our assets
    //Add assets/img
    this.load.spritesheet("tiles", "./assets/tiles.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.atlas("atlas", "./assets/atlas.png", "./assets/atlas.json");
    //Setting Up Animations
    this.load.on('complete', () => {
        generateAnimations(this);
    });
    //Add Player(Dino)
    this.player = new Player(this, 25, 460);
  }

  create() {
    // This is where we will create our game objects
  }

  update(time, delta) {
    // This is where we will update the game state
    this.player.sprite.play('run', true);
  }
}

export default Dino;
