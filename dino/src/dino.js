import generateAnimations from "./animations/index";
import Player from "./objects/Player";
import { showScore } from "./ui/score";
import { hidePressToPlay, hideGameOver } from "./ui/gameState";
import Star from "./objects/Star";

class Dino extends Phaser.Scene {
  constructor() {
    super("Dino");
    this.state = {
      started: false,
      gameOver: false,
      UIUpdated: false,
      numberOfStars: 3,
    };
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
    this.load.on("complete", () => {
      generateAnimations(this);
    });
  }

  create() {
    // This is where we will create our game objects

    //Add Player(Dino)
    this.player = new Player(this, 25, 460);
    //Add star/background
    for (let index = 0; index < this.state.numberOfStars; index++) {
      new Star(this);
    }
    // set up input
    this.inputs = this.input.keyboard.createCursorKeys();
  }

  update(time, delta) {
    // This is where we will update the game state
    this.player.update(this.inputs);
    //Check if the game has been started, or if the game is over
    if (
      this.inputs.space.isDown &&
      !this.state.started &&
      !this.state.gameOver
    ) {
      this.state.started = true;
    }

    if (this.state.started) {
      this.player.update(this.inputs);
      if (!this.state.UIUpdated) {
        this.updateUI();
      }
    }
  }

  updateUI() {
    hidePressToPlay();
    hideGameOver();

    showScore();

    this.state.UIUpdated = true;
  }
}

export default Dino;
