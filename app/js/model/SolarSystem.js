import AstronomicalBody from './AstronomicalBody';

export default class SolarSystem extends AstronomicalBody {
    constructor(name, sun, properties) {
        super(name, sun, properties);
        this.sun = sun;
        this.planets = [];
        this.className = 'SolarSystem';
    }

    addPlanet(planet) {
        planet.parent = this;
        this.planets.push(planet);
        this.emit('PlanetAdded', { planet });
    }

    removePlanet(planet) {
        const index = this.planets.indexOf(planet);

        if (index !== -1) {
            this.planets.splice(index, 1);
            this.emit('PlanetRemoved', { planet });
        }
    }

    [Symbol.iterator]() {
        return this.planets.values();
    }
}