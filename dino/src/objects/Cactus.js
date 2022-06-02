//This is obstacle for dino
class Cactus {
  constructor(scene) {
    this.scene = scene;
    this.sprite = scene.physics.add
      .sprite(700, 470, "tiles", 2)
      .setScale(2)
      //using setSize to make the bounding box better fit the shape of the sprite
      .setSize(5, 15)
      .setCollideWorldBounds(true);
    // using a customBoundsRectangle to extend the left and right side of the world
    this.sprite.body.customBoundsRectangle.left = -100;
    this.sprite.body.customBoundsRectangle.right = 740;
    this.update();
    // add a collider between dino and obstacle
    this.collider = scene.physics.add.collider(
      scene.player.sprite,
      this.sprite,
      this.gameOver,
      null,
      this
    );
  }
  update() {
    //this is animation.Move Cactus(not Dino) from the right all the way to the left
    this.sprite.setVelocityX(-150);
  }
  gameOver() {
    this.scene.player.die();
  }
  // update = function () {
  //     //this is animation.Move Cactus(not Dino) from the right all the way to the left
  //     this.sprite.setVelocityX(-150);
  // }
  // gameOver = function () {
  //     this.scene.player.die();
  // }
}

function stop() {
  this.sprite.setVelocityX(0);
}

export default Cactus;
