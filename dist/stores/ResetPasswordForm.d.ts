import InputHandler from "./InputHandler";
declare class ResetPasswordForm {
    passwordInput: InputHandler;
    confirmPasswordInput: InputHandler;
    get isValid(): boolean;
    constructor();
}
export default ResetPasswordForm;
