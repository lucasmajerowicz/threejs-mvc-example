import AstronomicalBody from './AstronomicalBody';

export default class Sun extends AstronomicalBody {
    constructor(name, properties) {
        super(name, properties);
        this.className = 'Sun';
    }
}