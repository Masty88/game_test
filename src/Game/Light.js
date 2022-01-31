import GameObject from "./GameObject";
import {HemisphericLight, Vector3} from "@babylonjs/core";

class Light extends GameObject{
    constructor() {
        super();
        this.light = new HemisphericLight("light", new Vector3(0, 1, 0), this.scene);
        this.light.intensity=0.3;
    }
}

export default Light;
