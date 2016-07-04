import ViewMediator from './ViewMediator';

export default class GalaxyViewMediator extends ViewMediator {
    constructor(galaxy, mediatorFactory) {
        super(galaxy, mediatorFactory);
        this.astronomicalBody.addObserver("SolarSystemAdded", (e) => this.onSolarSystemAdded(e));

        const stars = this.createStars(500, 60);

        this.object3D.add(stars);
    }

    onSolarSystemAdded(e) {
        this.addChild(e.solarSystem);
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
}