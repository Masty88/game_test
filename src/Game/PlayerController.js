import GameObject from "./GameObject";
import {Color3, MeshBuilder, StandardMaterial} from "@babylonjs/core";

class PlayerController extends GameObject{
    constructor() {
        super();
        this.player= MeshBuilder.CreateSphere("player",{segments:8,diameter:1.8}, this.scene);
        this.player.material= new StandardMaterial("player_mat",this.scene);
        this.player.material.emissiveColor= Color3.FromHexString('#ff9900')
        this.player.position.y=0.9
        this.player.checkCollisions= true;
    }

}

export default PlayerController
