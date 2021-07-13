var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { computed, makeObservable, observable } from "mobx";
import EmailValidator from "../core/validators/EmailValidator";
import PasswordValidator from "../core/validators/PasswordValidator";
import InputHandler from "./InputHandler";
var SignUpForm = /** @class */ (function () {
    function SignUpForm() {
        this.emailInput = new InputHandler(new EmailValidator());
        this.passwordInput = new InputHandler(new PasswordValidator());
        this.confirmPasswordInput = new InputHandler();
        makeObservable(this);
    }
    Object.defineProperty(SignUpForm.prototype, "isValid", {
        get: function () {
            if (this.emailInput.isValid === false ||
                this.passwordInput.isValid === false ||
                this.confirmPasswordInput.value !== this.passwordInput.value) {
                return false;
            }
            return true;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        observable
    ], SignUpForm.prototype, "emailInput", void 0);
    __decorate([
        observable
    ], SignUpForm.prototype, "passwordInput", void 0);
    __decorate([
        observable
    ], SignUpForm.prototype, "confirmPasswordInput", void 0);
    __decorate([
        computed
    ], SignUpForm.prototype, "isValid", null);
    return SignUpForm;
}());
export default SignUpForm;
