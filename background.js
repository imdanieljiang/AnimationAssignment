class ElNath {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });

        this.spritesheet = ASSET_MANAGER.getAsset("./ElNathBackground.png");
    }

    update() {}

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 1280, 720, 0, 0, 0, 0);
    }
}
