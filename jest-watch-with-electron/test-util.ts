import {LitElement} from 'lit-element';

export const createAndAppendElement = (tagName: string): LitElement => {
    const element = window.document.createElement(tagName) as LitElement;
    document.body.appendChild(element);
    return element;
}

export const getShadowRoot = (tagName: string): ShadowRoot => {
    return document.body.getElementsByTagName(tagName)[0].shadowRoot;
}

