import {html, customElement, LitElement, property} from "lit-element";

@customElement('custom-button')
export class Button extends LitElement {

    @property()
    buttonText = '';

    render() {
        return html`<button id="custom-button">${this.buttonText}</button>`;
    }
}
