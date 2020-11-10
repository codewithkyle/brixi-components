import { flatpickr } from "./flatpickr.js";

export default class DatePicker extends HTMLElement {
    private input: HTMLInputElement;

    constructor() {
        super();
        this.input = this.querySelector("input");
    }

    private validateInput() {
        if (this.input.required) {
            if (this.input.value === "") {
                if (this.getAttribute("state") !== "invalid") {
                    this.input.reportValidity();
                }
                this.setAttribute("state", "invalid");
            } else {
                this.setAttribute("state", "valid");
                this.input.setCustomValidity("");
            }
        } else {
            this.setAttribute("state", "valid");
            this.input.setCustomValidity("");
        }
    }

    public reportError(error: string) {
        this.input.setCustomValidity(error);
        this.input.reportValidity();
        this.setAttribute("state", "invalid");
    }

    public clearError() {
        this.input.setCustomValidity("");
        this.setAttribute("state", "valid");
    }

    private handleBlur: EventListener = () => {
        this.validateInput();
    };

    private handleInput: EventListener = () => {
        this.setAttribute("state", "valid");
        this.input.setCustomValidity("");
    };

    connectedCallback() {
        this.input.addEventListener("input", this.handleInput);
        this.input.addEventListener("blur", this.handleBlur);
        flatpickr(this.input, {
            dateFormat: "m/d/Y",
        });
    }
}
