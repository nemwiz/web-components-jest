import { Button, AWESOME_BUTTON_TAG } from "./button";

describe("awesome-button", () => {
    it("displays button text", async () => {
        const dummyText = "Web components & JSDOM";
        const buttonElement = window.document.createElement(
            AWESOME_BUTTON_TAG
        ) as Button;
        buttonElement.setAttribute("buttonText", dummyText);
        window.document.body.appendChild(buttonElement);
        await buttonElement.updateComplete;

        const renderedText = window.document.body.getElementsByTagName(
            AWESOME_BUTTON_TAG
        )[0].textContent;

        expect(renderedText.indexOf(dummyText)).not.toBe(-1);
    });
});
