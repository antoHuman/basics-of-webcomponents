
class ProgressBar extends HTMLElement {
    constructor() {
        super();
        console.log('constructor');
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(this.templateEl.content.cloneNode(true));
    }

    connectedCallback() {
        console.log('connectedCallback');
    }

    disconnectedCallback() {
        console.log('disconnectedCallback');
    }

    get templateEl() {
        return document.getElementById('progress-bar-template');
    }
}

customElements.define('progress-bar', ProgressBar);
