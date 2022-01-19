class YetiAndPepe {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(
            ASSET_MANAGER.getAsset("./YetiAndPepe.png"),
            1670,
            210,
            134,
            166,
            4,
            0.3
        );

        this.x = 0;
        this.y = 0;
        this.speed = 80;
    }

    update() {
        this.x += this.speed * this.game.clockTick;
        if (this.x > 1280) {
            this.x = 0;
        }
    }

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, 488);
    }
}
