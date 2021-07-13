import { computed, makeObservable, observable } from "mobx";
import EmailValidator from "../core/validators/EmailValidator";
import PasswordValidator from "../core/validators/PasswordValidator";
import InputHandler from "./InputHandler";

class SignUpForm {
  @observable
  public emailInput: InputHandler = new InputHandler(new EmailValidator());

  @observable
  public passwordInput: InputHandler = new InputHandler(
    new PasswordValidator()
  );

  @observable
  public confirmPasswordInput: InputHandler = new InputHandler();

  @computed
  public get isValid() {
    if (
      this.emailInput.isValid === false ||
      this.passwordInput.isValid === false ||
      this.confirmPasswordInput.value !== this.passwordInput.value
    ) {
      return false;
    }

    return true;
  }

  constructor() {
    makeObservable(this);
  }
}

export default SignUpForm;
