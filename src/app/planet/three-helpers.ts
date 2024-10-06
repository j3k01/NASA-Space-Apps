import * as THREE from 'three';

export default function getStarfield({ numStars = 500 } = {}) {
    function randomSpherePoint() {
        const radius = Math.random() * 25 + 25;
        const u = Math.random();
        const v = Math.random();
        const theta = 2 * Math.PI * u;
        const phi = Math.acos(2 * v - 1);
        let x = radius * Math.sin(phi) * Math.cos(theta);
        let y = radius * Math.sin(phi) * Math.sin(theta);
        let z = radius * Math.cos(phi);

        return new THREE.Vector3(x, y, z);
    }

    const verts = [];
    const opacities = [];
    const sizes = new Float32Array(numStars);

    for (let i = 0; i < numStars; i += 1) {
        const pos = randomSpherePoint();
        verts.push(pos.x, pos.y, pos.z);
        opacities.push(Math.random());
        sizes[i] = Math.random() * 2;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
    geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));

    const textureLoader = new THREE.TextureLoader();
    const starTexture = textureLoader.load('assets/star.png');

    const starMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 1.5,
        map: starTexture,
        transparent: true,
        opacity: 1.0,
        alphaTest: 0.5,
    });

    const stars = new THREE.Points(geometry, starMaterial);
    stars.userData = { opacities: opacities };

    return stars;
}
