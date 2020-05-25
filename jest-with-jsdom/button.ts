import {html, customElement, LitElement, property} from "lit-element";

@customElement('awesome-button')
export class Button extends LitElement {

    @property()
    buttonText = '';

    render() {
        return html`<button id="custom-button">${this.buttonText}</button>`;
    }

    createRenderRoot() {
        return this;
    }
}
