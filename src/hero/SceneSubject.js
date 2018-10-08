import * as THREE from 'three'
import cloudImg from './cloud.png';

export default scene => {

    let cloudTexture = new THREE.TextureLoader().load(cloudImg);
    let cloudMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff, map: cloudTexture, transparent: true });
    let cloudGeo = new THREE.PlaneGeometry(300, 300);
    let cloudParticles = [];


    for (let p = 0; p < 60; p++) {
        let particle = new THREE.Mesh(cloudGeo, cloudMaterial);
        particle.position.set(Math.random() * 500 - 250, Math.random() * 500 - 250, Math.random() * 1000 - 100);
        particle.rotation.z = Math.random() * 360;
        scene.add(particle);
        cloudParticles.push(particle);
    }





    function update(time) {
        let sp = cloudParticles.length;
        while (sp--) {
            cloudParticles[sp].rotation.z += 0.0008;
        }



        // mesh.rotation.x += 0.001;
        // mesh.rotation.y += 0.01;
        // cubeSineDriver += .01;
        // mesh.position.x += .0001;
        // mesh.position.z = 100 + (Math.sin(cubeSineDriver) * 500);
        // renderer.render(scene, camera);

    }

    return {
        update
    }
}
