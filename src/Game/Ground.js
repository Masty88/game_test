import GameObject from "./GameObject";
import {Mesh} from "react-babylonjs";
import {MeshBuilder, PlaneBuilder, Vector3} from "@babylonjs/core";

class Ground extends GameObject{
    constructor() {
        super();
         this.ground=  MeshBuilder.CreatePlane("ground", { size: 60}, this.scene);
         this.ground.position= new Vector3(0,0,0);
         this.ground.rotation.x = Math.PI/2;
    }
}

export default Ground
