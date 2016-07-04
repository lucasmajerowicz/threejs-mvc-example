export default class RenderingContext {
    constructor(scene, camera, renderer, controls) {
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.controls = controls;
    }

    static getDefault(containerElement) {
        const width  = window.innerWidth, height = window.innerHeight;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.01, 1000);
        const renderer = new THREE.WebGLRenderer();
        const controls = new THREE.TrackballControls(camera);

        camera.position.z = 20;
        renderer.setSize(width, height);
        scene.add(new THREE.AmbientLight(0x333333));

        const light = new THREE.DirectionalLight(0xffffff, 1);

        light.position.set(15,15,15);
        scene.add(light);

        containerElement.appendChild(renderer.domElement);

        return new RenderingContext(scene, camera, renderer, controls);
    }
}