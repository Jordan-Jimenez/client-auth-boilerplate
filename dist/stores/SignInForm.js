var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { computed, makeObservable, observable } from "mobx";
import EmailValidator from "../core/validators/EmailValidator";
import InputHandler from "./InputHandler";
var SignInForm = /** @class */ (function () {
    function SignInForm() {
        this.emailInput = new InputHandler(new EmailValidator());
        this.passwordInput = new InputHandler();
        makeObservable(this);
    }
    Object.defineProperty(SignInForm.prototype, "isValid", {
        get: function () {
            if (this.emailInput.isValid === false ||
                !this.passwordInput.value ||
                (this.passwordInput.value && this.passwordInput.value.length < 1)) {
                return false;
            }
            return true;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        observable
    ], SignInForm.prototype, "emailInput", void 0);
    __decorate([
        observable
    ], SignInForm.prototype, "passwordInput", void 0);
    __decorate([
        computed
    ], SignInForm.prototype, "isValid", null);
    return SignInForm;
}());
export default SignInForm;
