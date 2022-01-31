import GameObject from "./GameObject";
import CameraController from "./CameraController";
import Ground from "./Ground";
import Light from "./Light";
import PlayerController from "./PlayerController";

class GameController {
    constructor(scene) {
        // Initialization
        GameObject.GameController = this;
        GameObject.Scene = scene;
        this.scene = scene;

        // this.map = new MapController();
         this.camera = new CameraController();
         this.light = new Light();
         this.player= new PlayerController();
         this.plane= new Ground();
    }
}

export default GameController
