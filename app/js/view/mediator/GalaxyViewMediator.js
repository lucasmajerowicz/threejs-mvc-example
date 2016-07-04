import ViewMediator from './ViewMediator';

export default class GalaxyViewMediator extends ViewMediator {
    constructor(galaxy, mediatorFactory) {
        super(galaxy, mediatorFactory);
        this.astronomicalBody.addObserver("SolarSystemAdded", (e) => this.onSolarSystemAdded(e));
    }

    onSolarSystemAdded(e) {
        this.addChild(e.solarSystem);
    }
}