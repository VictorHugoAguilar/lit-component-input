import { LitElement, html } from "lit-element";
import { styles } from "./style";
/**
 * # VHAA Input
 *
 * <vhaa-input></vhaa-input>
 *
 * Input text field Web Component, with customized design. Based on LitElement.
 *
 * ## Styling
 *
 * ```
 * <vhaa-input
 *   label="Text to the label"
 *   value="Text to the input"
 *   placeholder="Some text"
 *   disabled
 *   errored
 * ></vhaa-input>
 * ```
 *
 * Custom property | Description | Default
 * ----------------|-------------|---------
 * --vhaa-input-width | Input element width | 100%
 * --vhaa-input-border-width | Input element border width | 1px
 * --vhaa-input-border-color | Input element border color | #888
 * --vhaa-input-border-radius | Input element border radius | 5px
 * --vhaa-input-error-border-color | Input element border on errored property = true | #c00
 * --vhaa-input-focus-border-color | Input element border on focus | #6af
 * --vhaa-input-disabled-border-color | Input element border when disabled | #eee
 * --vhaa-input-font-size | Input element font size | 1em
 * --vhaa-input-line-height | Input element line height | 1.5em
 * --vhaa-input-label-font-size | Font size for the label | 1em
 * --vhaa-input-label-color | Color for the label text | #59e
 * --vhaa-input-label-font-weight | Label text font weight | normal
 * --vhaa-input-label-color | Mixin applied to entire element | #59e
 * --vhaa-input-error-border-color
 * --vhaa-input-background-color
 * @customElement
 * @litElement
 */

export class VhaaInput extends LitElement {
    /**
     * Fired when user press enter key.
     *
     * @event enter-pressed
     */

    /**
     * Liten to the native input event to recive text input updates
     *
     * @event input
     */

    static get properties() {
        return {
            /** Set a type to the input element for default text */
            type: { type: String },

            /** Label to the element */
            label: { type: String },

            /** Set a placeholder to the input element */
            placeholder: { type: String },

            /** Disable the input field */
            disabled: { type: Boolean },

            /** Disable the autocomplete of the input field */
            disableAutocomplete: { type: Boolean },

            /** Set initial value to the input. This property syncs to the input field value property */
            value: { type: String },

            /** Name for this input field */
            name: { type: String },

            /** Name for this input field */
            errored: { type: Boolean },
        };
    }
    constructor() {
        super();
        this.type = "text";
        this.placeholder = "";
        this.label = "";
        this.value = "";
        this.disabled = false;
        this.disableAutocomplete = false;
        this.name = "";
    }
    static get styles() {
        return [styles];
    }
    render() {
        return html`
            <div>
                ${this.label ? html`<label for="textField">${this.label}</label>` : ""}
                <input
                    .type="${this.type}"
                    id="textField"
                    name="${this.name}"
                    placeholder="${this.placeholder}"
                    ?disabled="${this.disabled}"
                    autocomplete="${this.disableAutocomplete ? "off" : "on"}"
                    @keypress="${this._lookForEnter}"
                    @input="${this._input}"
                    .value="${this.value}"
                    class="${this.errored ? "errored" : ""}"
                />
            </div>
        `;
    }
    /**
     * Private method to dispatch events on enter key pressed
     */
    _lookForEnter(e) {
        const keycode = e.keyCode ? e.keyCode : e.which;
        if (keycode === 13) {
            this.dispatchEvent(new CustomEvent("enter-pressed"));
        }
    }

    _input({ target: { value } }) {
        this.value = value;
    }
}

window.customElements.define("vhaa-input", VhaaInput);
