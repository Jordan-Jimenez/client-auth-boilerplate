import InputHandler from "./InputHandler";
declare class SignUpForm {
    emailInput: InputHandler;
    passwordInput: InputHandler;
    confirmPasswordInput: InputHandler;
    get isValid(): boolean;
    constructor();
}
export default SignUpForm;
