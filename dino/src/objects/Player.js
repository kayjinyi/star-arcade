class Player {
    constructor(scene, x, y) {
        this.scene = scene;
        this.sprite = scene.physics.add.sprite(x, y, 'atlas')
            .setScale(2)
            .setImmovable()
            .setCollideWorldBounds();
        //This will check if the Dino has died
        this.isDead = false;
        return this;
    }

    update(input) {
        // Allow movements if the Dino is still alive. If the Dino is alive, and is on the floor, using body.onFloor
        if (!this.isDead && this.sprite.body.onFloor()) {
            this.sprite.play('run', true);
        }
    
        if ((input.space.isDown && this.sprite.body.onFloor())) {
            this.sprite.setVelocityY(-500);
            this.sprite.play('idle', true);
        }
    }
}

export default Player;