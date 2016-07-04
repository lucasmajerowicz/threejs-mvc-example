import Observable from '../Observable';

export default class AstronomicalBody extends Observable {
    constructor(name, properties = {}) {
        super();
        this.name = name;
        this.properties = properties;
    }
}