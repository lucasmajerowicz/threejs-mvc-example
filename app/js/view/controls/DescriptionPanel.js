export default class DescriptionPanel {
    constructor() {
        this.domContainer = document.createElement('div');
        this.domContainer.id = 'panel';
        document.body.appendChild(this.domContainer);
    }

    set text(text) {
        this.domContainer.innerHTML = text;
    }
}