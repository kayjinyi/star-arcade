import { updateScore, showHighScore } from "../ui/score";

function die() {
  this.isDead = true;
  this.sprite.play("idle", true);

  this.scene.state.started = false;
  this.scene.state.gameOver = true;

  showHighScore();
  showGameOver();
  if (this.scene.state.score > this.scene.state.highScore) {
    setHighScore(this.scene.state);
  }
}

class Player {
  constructor(scene, x, y) {
    this.scene = scene;
    this.sprite = scene.physics.add
      .sprite(x, y, "atlas")
      .setScale(2)
      .setImmovable()
      .setCollideWorldBounds();
    //This will check if the Dino has died
    this.isDead = false;
    //This for updating Score
    this.scene = scene;
    this.timer = 0;
    return this;
  }

  update(input, delta) {
    // Allow movements if the Dino is still alive. If the Dino is alive, and is on the floor, using body.onFloor
    if (!this.isDead && this.sprite.body.onFloor()) {
      this.sprite.play("run", true);
    }

    if (input.space.isDown && this.sprite.body.onFloor()) {
      this.sprite.setVelocityY(-500);
      this.sprite.play("idle", true);
    }
    //Increase timer with delta
    this.timer += delta;
    if (this.timer > 100 / this.scene.state.speed) {
      this.timer = 0;
      updateScore(this.scene.state);
    }
  }
}

export default Player;
