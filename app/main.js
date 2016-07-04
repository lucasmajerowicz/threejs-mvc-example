import 'babel-polyfill';
import 'three';
import 'bin/TrackballControls';
import APIClient from './js/APIClient';
import GalaxyController from './js/controller/GalaxyController';
import Galaxy from './js/model/Galaxy';
import SolarSystem from './js/model/SolarSystem';
import Planet from './js/model/Planet';
import Sun from './js/model/Sun';

const galaxy = new Galaxy('Milky Way');
const galaxyController = new GalaxyController(galaxy);

// add solar system to galaxy
const apiClient = new APIClient();
const galaxyRecord = apiClient.getRecord();

for (const solarSystemRecord of galaxyRecord.solarSystems) {
    const sunRecord = solarSystemRecord.sun;
    const sun = new Sun(sunRecord.name, sunRecord.props);
    const solarSystem = new SolarSystem(solarSystemRecord.name, sun, solarSystemRecord.props);

    galaxy.addSolarSystem(solarSystem);

    for (const planetRecord of solarSystemRecord.planets) {
        const planet = new Planet(planetRecord.name, planetRecord.props);

        if (planetRecord.satellites) {
            for (const satelliteRecord of planetRecord.satellites) {
                planet.addSatellite(new Planet(satelliteRecord.name, satelliteRecord.props));
            }
        }
        solarSystem.addPlanet(planet);
    }
}