import InputValidation from "../../types/InputValidation";
import Validator from "../../types/Validator";
import { EMAIL_REGEX } from "../regex";

class EmailValidator implements Validator {
  private validation: InputValidation = EMAIL_REGEX;

  public getErrorMessages = (value: string = "") => {
    const isValid = this.validation.testExp.test(value);

    if (!isValid) {
      return [this.validation.invalidMessage];
    }

    return [];
  };
}

export default EmailValidator;
