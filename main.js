const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./YetiAndPepe.png");
ASSET_MANAGER.queueDownload("./ElNathBackground.png");

ASSET_MANAGER.downloadAll(() => {
    const canvas = document.getElementById("gameWorld");
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;

    gameEngine.addEntity(new YetiAndPepe(gameEngine));
    gameEngine.addEntity(new ElNathBackground(gameEngine, 0, 0));

    gameEngine.init(ctx);

    gameEngine.start();
});
