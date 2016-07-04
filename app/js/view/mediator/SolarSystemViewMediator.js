import ViewMediator from './ViewMediator';

export default class SolarSystemViewMediator extends ViewMediator {
    constructor(solarSystem, mediatorFactory) {
        super(solarSystem, mediatorFactory);
        this.sunViewMediator = this.mediatorFactory.getMediator(solarSystem.sun);
        this.object3D.add(this.sunViewMediator.object3D);
        this.astronomicalBody.addObserver("PlanetAdded", (e) => this.onPlanetAdded(e));
        this.astronomicalBody.addObserver("PlanetRemoved", (e) => this.onPlanetRemoved(e));
    }

    onPlanetAdded(e) {
        this.addChild(e.planet);
    }

    onPlanetRemoved(e) {
        this.removeChild(e.planet);
    }
}