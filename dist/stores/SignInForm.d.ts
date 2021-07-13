import InputHandler from "./InputHandler";
declare class SignInForm {
    emailInput: InputHandler;
    passwordInput: InputHandler;
    get isValid(): boolean;
    constructor();
}
export default SignInForm;
