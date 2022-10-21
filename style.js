import { css } from "lit-element";

export const styles = css`
    * {
        box-sizing: border-box;
    }
    :host {
        display: block;
        margin-bottom: 10px;
    }
    label {
        display: block;
        margin-bottom: var(--vhaa-input-label-margin-bottom, 4px);
        font-size: var(--vhaa-input-label-font-size, 1em);
        color: var(--vhaa-input-label-color, #59e);
        font-weight: var(--vhaa-input-label-font-weight, normal);
    }
    input {
        box-sizing: border-box;
        border-radius: var(--vhaa-input-border-radius, 5px);
        border: var(--vhaa-input-border-width, 1px) solid var(--vhaa-input-border-color, #888);
        font-size: var(--vhaa-input-font-size, 1em);
        line-height: var(--vhaa-input-line-height, 1.5em);
        padding: var(--vhaa-input-padding, 5px);
        width: var(--vhaa-input-width, 100%);
        background-color: var(--vhaa-input-background-color, #fff);
    }
    input:focus {
        outline: none;
        border-color: var(--vhaa-input-focus-border-color, #6af);
    }
    input::placeholder {
        color: #ccc;
    }
    input:disabled {
        background-color: #f5f5f5;
        border-color: var(--vhaa-input-disabled-border-color, #eee);
    }
    .errored {
        border-color: var(--vhaa-input-error-border-color, #c00);
    }
`;
