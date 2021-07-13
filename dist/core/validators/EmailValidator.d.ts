import Validator from "../../types/Validator";
declare class EmailValidator implements Validator {
    private validation;
    getErrorMessages: (value?: string) => string[];
}
export default EmailValidator;
