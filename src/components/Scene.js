import React from 'react';
import { FreeCamera, Vector3, HemisphericLight, MeshBuilder } from "@babylonjs/core";
import SceneComponent from 'babylonjs-hook'; // if you install 'babylonjs-hook' NPM.
import GameController from "../Game/GameController";

let box;

const Scene = () => {
    const onSceneMount = (scene) => {
       new GameController(scene)
        const canvas = scene.getEngine().getRenderingCanvas();
    };

    /**
     * Will run on every frame render.  We are spinning the box on y-axis.
     */
    // const onRender = (scene) => {
    //     if (box !== undefined) {
    //         var deltaTimeInMillis = scene.getEngine().getDeltaTime();
    //
    //         const rpm = 10;
    //         box.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
    //     }
    // };

    return (
        <div>
            <SceneComponent antialias onSceneReady={onSceneMount}  id="my-canvas" />
        </div>
    );
};

export default Scene;
