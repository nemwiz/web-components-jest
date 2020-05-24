import useFakeTimers = jest.useFakeTimers;
import runAllTimers = jest.runAllTimers;

require('dist/main')

describe('custom-button', () => {

    beforeEach(() => {
        useFakeTimers()
    });

   it('runs the test', async () => {

       // @ts-ignore
       // const button = new a.Button();



       const buttonElement = window.document.createElement("custom-button");
       buttonElement.setAttribute('buttonText', 'Hello test button');
       // @ts-ignore
       buttonElement.initialize();
       // @ts-ignore
       await buttonElement.updateComplete;
       window.document.body.appendChild(buttonElement);
       console.log(window.document.body.getElementsByTagName('custom-button')[0])
       // @ts-ignore
       // buttonElement.initialize();
       // @ts-ignore
       // await buttonElement.updateComplete;
       //
       // const renderedButton = window.document.getElementsByTagName('custom-button')[0];
       // console.log(renderedButton.innerHTML);
       // console.log(renderedButton.shadowRoot);
       // console.log(window.document.body)
       // console.log(divElement.getElementsByTagName('custom-button')[0].shadowRoot)

       // setTimeout(() => {
       //     console.log(divElement.getElementsByTagName('custom-button')[0].shadowRoot)
       //     expect(true).toBe(true);
       // }, 3000)

       runAllTimers();

       // expect(true).toBe(true);
   })
});
