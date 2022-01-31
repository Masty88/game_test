import GameObject from "./GameObject";
import {FreeCamera, Vector3} from "@babylonjs/core";

class CameraController extends GameObject{
    constructor() {
        super();
        this.camera= new FreeCamera("camera1", new Vector3(0, 9, -10), this.scene)
        this.camera.attachControl(this.scene, true);
        this.camera.setTarget(Vector3.Zero())
    }
}

export default CameraController
