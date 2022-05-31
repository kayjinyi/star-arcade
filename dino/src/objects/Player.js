class Player {
    constructor(scene, x, y) {
        this.scene = scene;
        this.sprite = scene.physics.add.sprite(x, y, 'atlas')
            .setScale(2)
            .setImmovable()
            .setCollideWorldBounds();

        return this;
    }
}

export default Player;