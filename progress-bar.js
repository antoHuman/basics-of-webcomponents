
class ProgressBar extends HTMLElement {
    constructor() {
        super();
        console.log('constructor');
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = '<p>I am in the Shadow DOM</p>';
    }

    connectedCallback() {
        console.log('connectedCallback');
    }

    disconnectedCallback() {
        console.log('disconnectedCallback');
    }
}

customElements.define('progress-bar', ProgressBar);
