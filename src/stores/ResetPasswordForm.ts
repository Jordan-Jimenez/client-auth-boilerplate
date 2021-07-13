import { computed, makeObservable, observable } from "mobx";
import PasswordValidator from "../core/validators/PasswordValidator";
import InputHandler from "./InputHandler";

class ResetPasswordForm {
  @observable
  public passwordInput: InputHandler = new InputHandler(
    new PasswordValidator()
  );

  @observable
  public confirmPasswordInput: InputHandler = new InputHandler();

  @computed
  public get isValid() {
    if (
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

export default ResetPasswordForm;
