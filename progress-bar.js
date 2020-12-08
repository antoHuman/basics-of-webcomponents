
class ProgressBar extends HTMLElement {
    constructor() {
        super();
        console.log('constructor');
    }

    connectedCallback() {
        console.log('connectedCallback');
    }

    disconnectedCallback() {
        console.log('disconnectedCallback');
    }
}

customElements.define('progress-bar', ProgressBar);
