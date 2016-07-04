import ViewMediator from './ViewMediator';

export default class PlanetViewMediator extends ViewMediator {
    constructor(planet, mediatorFactory) {
        super(planet, mediatorFactory);
        this.astronomicalBody.addObserver("SatelliteAdded", (e) => this.onSatelliteAdded(e));
        this.astronomicalBody.addObserver("SatelliteRemoved", (e) => this.onSatelliteRemoved(e));
    }

    makeObject3D() {
        const container = new THREE.Object3D();
        const mesh = new THREE.Mesh(
            new THREE.SphereGeometry(this.astronomicalBody.properties.radius, PlanetViewMediator.SphereSegments, PlanetViewMediator.SphereSegments),
            new THREE.MeshPhongMaterial({
                map	: THREE.ImageUtils.loadTexture(this.astronomicalBody.properties.texture)
            })
        );

        container.rotation.y = Math.random() * 360;
        container.add(mesh);

        mesh.position.setX(this.astronomicalBody.properties.distance);
        return container;
    }

    onSatelliteAdded(e) {
        this.addChild(e.satellite);
    }

    onSatelliteRemoved(e) {
        this.removeChild(e.satellite);
    }

    onFrameRenderered() {
        super.onFrameRenderered();

        if (this.astronomicalBody.isMoving) {
            if (this.astronomicalBody.properties.orbitalSpeed) {
                this.object3D.rotation.y += this.astronomicalBody.properties.orbitalSpeed / 3;
            }

            if (this.astronomicalBody.properties.rotationSpeed) {
                this.object3D.children[0].rotation.y += this.astronomicalBody.properties.rotationSpeed / 3;
            }
        }
    }
}

PlanetViewMediator.SphereSegments = 32;