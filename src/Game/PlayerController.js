import GameObject from "./GameObject";
import {Color3, MeshBuilder, StandardMaterial} from "@babylonjs/core";

class PlayerController extends GameObject{
    constructor() {
        super();
        this.player= MeshBuilder.CreateBox("player",{width:8,height:8}, this.scene);
        this.player.material= new StandardMaterial("player_mat",this.scene);
        this.player.material.emissiveColor= Color3.FromHexString('#ff9900')
        this.player.position.y=0.9
        this.player.checkCollisions= true;

    }
   remove() {
        const deltaTimeInMillis = this.scene.getEngine().getDeltaTime();
        const rpm = 100;
        this.player.rotation.y +=(rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000); //     if (box !== undefined) {
    }
}

export default PlayerController
