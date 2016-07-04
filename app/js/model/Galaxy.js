import AstronomicalBody from './AstronomicalBody';

export default class Galaxy extends AstronomicalBody {
    constructor(name, properties) {
        super(name, properties);
        this.solarSystems = [];
        this.className = 'Galaxy';
    }

    addSolarSystem(solarSystem) {
        this.solarSystems.push(solarSystem);
        this.emit('SolarSystemAdded', { solarSystem });
    }

    [Symbol.iterator]() {
        return this.solarSystems.values();
    }
}