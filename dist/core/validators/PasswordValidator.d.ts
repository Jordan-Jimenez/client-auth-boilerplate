import Validator from "../../types/Validator";
declare class PasswordValidator implements Validator {
    private validations;
    getErrorMessages: (value?: string) => string[];
}
export default PasswordValidator;
