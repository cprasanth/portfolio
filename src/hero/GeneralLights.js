import * as THREE from 'three'

export default scene => {    

    const lightIn = new THREE.DirectionalLight(0xffffff, 1);
    lightIn.position.set(-1, 0, 1);

    scene.add(lightIn);

    function update(time) {
    }

    return {
        update
    }
}