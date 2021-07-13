import { computed, makeObservable, observable } from "mobx";
import EmailValidator from "../core/validators/EmailValidator";
import InputHandler from "./InputHandler";

class SignInForm {
  @observable
  public emailInput: InputHandler = new InputHandler(new EmailValidator());

  @observable
  public passwordInput: InputHandler = new InputHandler();

  @computed
  public get isValid() {
    if (
      this.emailInput.isValid === false ||
      !this.passwordInput.value ||
      (this.passwordInput.value && this.passwordInput.value.length < 1)
    ) {
      return false;
    }

    return true;
  }

  constructor() {
    makeObservable(this);
  }
}

export default SignInForm;
