import ViewMediator from './ViewMediator';

export default class SunViewMediator extends ViewMediator {
    constructor(sun, mediatorFactory) {
        super(sun, mediatorFactory);
    }

    makeObject3D() {
        const object3D = new THREE.Mesh(
            new THREE.SphereGeometry(this.astronomicalBody.properties.radius, SunViewMediator.SphereSegments, SunViewMediator.SphereSegments),
            new THREE.MeshPhongMaterial({
                map	: THREE.ImageUtils.loadTexture(this.astronomicalBody.properties.texture)
            })
        );

        const texture = THREE.ImageUtils.loadTexture('images/sunsprite.png');
        const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
            map: texture,
            blending: THREE.AdditiveBlending,
            useScreenCoordinates: false,
            color: 0xffffff
        }));
        sprite.scale.x = this.astronomicalBody.properties.radius * 10;
        sprite.scale.y = this.astronomicalBody.properties.radius * 10;
        sprite.scale.z = 1;

        const container = new THREE.Object3D();
        container.add(sprite);
        container.add(object3D);
        return container;
    }
}

SunViewMediator.SphereSegments = 32;