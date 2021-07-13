import InputValidation from "../../types/InputValidation";
import Validator from "../../types/Validator";
import { PASSWORD_REGEX } from "../regex";

class PasswordValidator implements Validator {
  private validations: InputValidation[] = PASSWORD_REGEX;

  public getErrorMessages = (value: string = "") => {
    const testResults = this.validations.map((validation) => {
      const isValid = validation.testExp.test(value);

      if (!isValid) {
        return validation.invalidMessage;
      }

      return undefined;
    });

    return testResults.filter((message) => !!message) as string[];
  };
}

export default PasswordValidator;
