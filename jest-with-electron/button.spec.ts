import {createAndAppendElement, getShadowRoot} from './test-util';
import {LitElement} from 'lit-element';

describe('custom-button', () => {

    const AWESOME_BUTTON_TAG = 'awesome-button';
    const ELEMENT_ID = 'custom-button';
    let buttonElement: LitElement;

    beforeEach(() => {
        buttonElement = createAndAppendElement(AWESOME_BUTTON_TAG);
    });

    afterEach(() => {
       document.body.getElementsByTagName(AWESOME_BUTTON_TAG)[0].remove();
    });

    it('displays button text', async () => {
        const dummyText = 'Web components & Jest with Electron';
        buttonElement.setAttribute('buttonText', dummyText);
        await buttonElement.updateComplete;

        const renderedText = getShadowRoot(AWESOME_BUTTON_TAG).getElementById(ELEMENT_ID).innerText;

        expect(renderedText).toEqual(dummyText);
    });
    it('handles clicks', async () => {
        const mockClickFunction = jest.fn();
        buttonElement.addEventListener('click', () => {mockClickFunction()});

        getShadowRoot(AWESOME_BUTTON_TAG).getElementById(ELEMENT_ID).click();
        getShadowRoot(AWESOME_BUTTON_TAG).getElementById(ELEMENT_ID).click();

        expect(mockClickFunction).toHaveBeenCalledTimes(2);
    });
});
