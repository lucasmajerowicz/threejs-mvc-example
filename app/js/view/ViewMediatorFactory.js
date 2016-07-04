import GalaxyViewMediator from './mediator/GalaxyViewMediator';
import SolarSystemViewMediator from './mediator/SolarSystemViewMediator';
import PlanetViewMediator from './mediator/PlanetViewMediator';
import SunViewMediator from './mediator/SunViewMediator';

export default class ViewMediatorFactory {
    getMediator(astronomicalBody) {
        switch (astronomicalBody.className) {
            case 'Galaxy':
                return new GalaxyViewMediator(astronomicalBody, this);
            case 'SolarSystem':
                return new SolarSystemViewMediator(astronomicalBody, this);
            case 'Sun':
                return new SunViewMediator(astronomicalBody, this);
            case 'Planet':
                return new PlanetViewMediator(astronomicalBody, this);
        }
    }
}
