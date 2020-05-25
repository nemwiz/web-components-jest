import {LitElement} from 'lit-element';

describe('awesome-button', () => {

    const AWESOME_BUTTON_TAG = 'awesome-button';

    it('displays button text', async () => {
        const dummyText = 'Web components & JSDOM';
        const buttonElement = window.document.createElement(AWESOME_BUTTON_TAG) as LitElement;
        buttonElement.setAttribute('buttonText', dummyText);
        window.document.body.appendChild(buttonElement);
        await buttonElement.updateComplete;

        const renderedText = window.document.body.getElementsByTagName(AWESOME_BUTTON_TAG)[0].textContent;

        expect(renderedText.indexOf(dummyText)).not.toBe(-1);
    })
});
