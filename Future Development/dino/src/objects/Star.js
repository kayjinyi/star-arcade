//This is game background
class Star {
    constructor(scene) {
        //using Math.random, to select a random sprite to alternate between the two types of stars
        const randomSprite = Math.floor(Math.random() * 2);
        const randomXPosition = Math.floor(Math.random() * 620) + 20;
        const randomYPosition = Math.floor(Math.random() * 400) + 20;

        this.sprite = scene.physics.add.staticSprite(randomXPosition, randomYPosition, 'tiles', randomSprite)
            .setScale(2);
    }
}

export default Star;