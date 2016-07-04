import DescriptionPanel from './controls/DescriptionPanel';
import ObjectPicker from './controls/ObjectPicker';
import GalaxyViewMediator from './mediator/GalaxyViewMediator';
import ViewMediatorFactory from './ViewMediatorFactory';
import RenderingContext from './RenderingContext';

export default class MainView {
    constructor(controller, galaxy) {
        this.controller = controller;
        this.galaxy = galaxy;
        this.renderingContext = this.createRenderingContext();
        this.galaxyViewMediator = new GalaxyViewMediator(galaxy, new ViewMediatorFactory());
        this.objectPicker = new ObjectPicker(this.galaxyViewMediator, this.renderingContext);
        this.descriptionPanel = new DescriptionPanel();
    }

    createRenderingContext() {
        const domContainer = document.createElement('div');

        document.body.appendChild(domContainer);

        return RenderingContext.getDefault(domContainer);
    }

    initialize() {
        const scene = this.renderingContext.scene;
        const stars = this.createStars(500, 60);
        scene.add(stars);

        const object3D = this.galaxyViewMediator.object3D;

        scene.add(object3D);

        this.objectPicker.initialize();
        this.objectPicker.addObserver('doubleclick', (e) => this.controller.onDoubleClick(e.astronomicalBody));
        this.objectPicker.addObserver('click', (e) => this.controller.onClick(e.astronomicalBody));
        this.objectPicker.addObserver('mousemove', (e) => this.controller.onMouseMove(e.astronomicalBody));

        window.addEventListener( 'resize', (e) => this.onWindowResize(), false );
        this.render();
    }

    render() {
        this.renderingContext.controls.update();
        requestAnimationFrame(() => this.render());

        this.galaxyViewMediator.onFrameRenderered();
        this.renderingContext.renderer.render(this.renderingContext.scene, this.renderingContext.camera);
    }

    createStars(radius, segments) {
        return new THREE.Mesh(
            new THREE.SphereGeometry(radius, segments, segments),
            new THREE.MeshBasicMaterial({
                map:  THREE.ImageUtils.loadTexture('images/eso_dark.jpg'),
                side: THREE.BackSide
            })
        );
    }

    onWindowResize(){
        this.renderingContext.camera.aspect = window.innerWidth / window.innerHeight;
        this.renderingContext.camera.updateProjectionMatrix();

        this.renderingContext.renderer.setSize(window.innerWidth, window.innerHeight);
        this.objectPicker.notifyWindowResize();
    }
}