import 'bin/GPUPicker';
import Observable from '../../Observable';

export default class ObjectPicker extends Observable {
    constructor(mediator, renderingContext) {
        super();
        this.mediator = mediator;
        this.renderingContext = renderingContext;
    }

    initialize() {
        this.raycaster = new THREE.Raycaster();

        this.gpuPicker = new THREE.GPUPicker({renderer: this.renderingContext.renderer, debug: false});
        this.gpuPicker.setScene(this.renderingContext.scene);
        this.gpuPicker.setCamera(this.renderingContext.camera);
        this.renderingContext.renderer.domElement.addEventListener('dblclick', (e) => this.onDoubleClick(e));
        this.renderingContext.renderer.domElement.addEventListener('click', (e) => this.onClick(e));
        this.renderingContext.renderer.domElement.addEventListener('mousemove', (e) => this.onMouseMove(e));
    }

    onDoubleClick(e) {
        const astronomicalBody = this.getIntersection(e);

        this.emit('doubleclick', { astronomicalBody });
    }

    onClick(e) {
        const astronomicalBody = this.getIntersection(e);

        this.emit('click', { astronomicalBody });
    }

    onMouseMove(e) {
        const astronomicalBody = this.getIntersection(e);

        this.emit('mousemove', { astronomicalBody });
    }

    notifyWindowResize() {
        this.gpuPicker.needUpdate = true;
        this.gpuPicker.resizeTexture(window.innerWidth, window.innerHeight);
    }

    getIntersection(e) {
        this.gpuPicker.setScene(this.renderingContext.scene);

        const mouse = new THREE.Vector2();

        mouse.x = e.clientX;
        mouse.y = e.clientY;

        const raymouse = new THREE.Vector2();

        raymouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
        raymouse.y = -( e.clientY / window.innerHeight ) * 2 + 1;
        this.raycaster.setFromCamera(raymouse, this.renderingContext.camera);

        const intersection = this.gpuPicker.pick(mouse, this.raycaster);
        let astronomicalBody = null;


        if (intersection) {
            const originalObject = intersection.object.parent.originalObject;

            if (originalObject.mediator) {
                astronomicalBody = originalObject.mediator.astronomicalBody;
            }
        }

        return astronomicalBody;
    }
}