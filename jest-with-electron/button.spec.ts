import {LitElement} from 'lit-element';

describe('custom-button', () => {
    it('runs the test', async () => {
        const dummyText = 'Web components & Jest';

        const buttonElement = window.document.createElement("custom-button") as LitElement;
        buttonElement.setAttribute('buttonText', dummyText);
        window.document.body.appendChild(buttonElement);

        await buttonElement.updateComplete;

        const renderedText = document.body.getElementsByTagName('custom-button')[0].shadowRoot.getElementById('custom-button').innerText;

        expect(true).toBeTruthy();
        expect(renderedText).toEqual(dummyText);
    })
});
