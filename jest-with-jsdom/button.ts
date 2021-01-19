import {html, customElement, LitElement, property} from "lit-element";

export const AWESOME_BUTTON_TAG = "awesome-button";

@customElement(AWESOME_BUTTON_TAG)
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
