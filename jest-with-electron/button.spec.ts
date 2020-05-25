import {createAndAppendElement, getShadowRoot} from './test-util';

describe('custom-button', () => {

    const CUSTOM_BUTTON_TAG = 'custom-button';

    it('displays button text', async () => {

        const buttonElement = createAndAppendElement(CUSTOM_BUTTON_TAG);
        const dummyText = 'Web components & Jest with Electron';
        buttonElement.setAttribute('buttonText', dummyText);

        await buttonElement.updateComplete;

        const renderedText = getShadowRoot(CUSTOM_BUTTON_TAG).getElementById('custom-button').innerText;

        expect(renderedText).toEqual(dummyText);
    })
});
