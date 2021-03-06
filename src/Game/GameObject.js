class GameObject {
    static GameController;
    static Scene;

    constructor() {
        this.gameController = GameObject.GameController;
        this.scene = GameObject.Scene;

        const beforeLoop = () => this.beforeLoop();
        this.scene.registerBeforeRender(beforeLoop);
        this.unregisterBeforeLoop = () => this.scene.unregisterBeforeRender(beforeLoop);

        const afterLoop = () => this.afterLoop();
        this.scene.registerAfterRender(afterLoop);
        this.unregisterAfterLoop = () => this.scene.unregisterBeforeRender(afterLoop);
    }

    beforeLoop() {}

    afterLoop() {}

    remove() {
        if (this.unregisterBeforeLoop)
            this.unregisterBeforeLoop();

        if (this.unregisterAfterLoop)
            this.unregisterAfterLoop();

        if (this.unsubscribeStore)
            this.unsubscribeStore();
    }
}

export default GameObject;
