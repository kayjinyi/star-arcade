import generateAnimations from "./animations/index";
import Player from "./objects/Player";
import { showScore } from "./ui/score";
import { hidePressToPlay, hideGameOver } from "./ui/gameState";
import Star from "./objects/Star";
import Cactus from "./objects/Cactus";

class Dino extends Phaser.Scene {
  constructor() {
    super("Dino");
    this.state = {
      started: false,
      gameOver: false,
      UIUpdated: false,
      numberOfStars: 3,
      // An array to hold the cactuses
      cactuses: [],
      // The distance in seconds between two cactuses
      cactusDistance: 2000,
      timer: {
        // A timer to keep track of the time of last spawn
        cactusSpawnLoop: 0,
      },
      //update the score
      score: 0
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
    this.state.timer.cactusSpawnLoop += delta;
    if (this.state.started) {
      this.player.update(this.inputs);
      if (!this.state.UIUpdated) {
        this.updateUI();
      }
      if (this.state.timer.cactusSpawnLoop > this.state.cactusDistance) {
        //using Phaser.Math.Between to randomly increase/decrease the distance from the next cactus
        this.state.cactusDistance = Phaser.Math.Between(5000, 1000);
        this.state.cactuses.push(new Cactus(this));
        this.state.timer.cactusSpawnLoop = 0;
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
