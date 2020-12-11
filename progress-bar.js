
class ProgressBar extends HTMLElement {

    static get observedAttributes() {
        return ['wc-percentage'];
    }

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

    attributeChangedCallback(attrName, oldValue, newValue) {
        console.log('attributeChangedCallback');
        console.log(attrName, oldValue, newValue);
        switch (attrName) {
            case 'wc-percentage':
                let percentage = parseFloat(newValue) || 0;
                if (percentage < 0) {
                    percentage = 0;
                }
                if (percentage > 100) {
                    percentage = 100;
                }
                this._barEl.style.width = percentage + '%';
                break;
        }

    }

    get templateEl() {
        return document.getElementById('progress-bar-template');
    }

    get _barEl() {
        return this.shadowRoot.querySelector('.bar');
    }

    get wcPercentage() {
        return this.getAttribute('wc-percentage');
    }

    set wcPercentage(value) {
        this.setAttribute('wc-percentage', value);
    }

}

setTimeout(()=> {customElements.define('progress-bar', ProgressBar);
}, 1000)
