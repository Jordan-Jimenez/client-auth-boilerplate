import { EMAIL_REGEX } from "../regex";
var EmailValidator = /** @class */ (function () {
    function EmailValidator() {
        var _this = this;
        this.validation = EMAIL_REGEX;
        this.getErrorMessages = function (value) {
            if (value === void 0) { value = ""; }
            var isValid = _this.validation.testExp.test(value);
            if (!isValid) {
                return [_this.validation.invalidMessage];
            }
            return [];
        };
    }
    return EmailValidator;
}());
export default EmailValidator;
