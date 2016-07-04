import AstronomicalBody from './AstronomicalBody';

export default class Planet extends AstronomicalBody {
    constructor(name, properties) {
        super(name, properties);
        this.satellites = [];
        this.className = 'Planet';
        this.isMoving = true;
    }

    addSatellite(satellite) {
        satellite.parent = this;
        this.satellites.push(satellite);
        this.emit('SatelliteAdded', { satellite });
    }

    removeSatellite(satellite) {
        const index = this.satellites.indexOf(satellite);

        if (index !== -1) {
            this.satellites.splice(index, 1);
            this.emit('SatelliteRemoved', { satellite });
        }
    }

    [Symbol.iterator]() {
        return this.satellites.values();
    }
}