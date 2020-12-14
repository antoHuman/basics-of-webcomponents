

class ProgressBar extends HTMLElement {

    static get observedAttributes() {
        return ['wc-percentage'];
    }

    constructor() {
        super();
        console.log('constructor')
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(document.getElementById('progress-bar-template').content.cloneNode(true));
    }

    connectedCallback() {
        console.log('connectedCallback')
    }

    disconnectedCallback() {
        console.log('disconnectedCallback')
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        switch (attrName) {
            case 'wc-percentage':
                this.shadowRoot.querySelector('.bar').style.width = newValue + '%';
                break;
        }
    }

    get wcPercentage() {
        return this.getAttribute('wc-percentage');
    }

    set wcPercentage(value) {
        this.setAttribute('wc-percentage', value);
    }
}

class ProgressBar2 extends ProgressBar {
    constructor() {
        super();
    }


}

customElements.define('progress-bar', ProgressBar)
