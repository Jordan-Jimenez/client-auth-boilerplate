import { PASSWORD_REGEX } from "../regex";
var PasswordValidator = /** @class */ (function () {
    function PasswordValidator() {
        var _this = this;
        this.validations = PASSWORD_REGEX;
        this.getErrorMessages = function (value) {
            if (value === void 0) { value = ""; }
            var testResults = _this.validations.map(function (validation) {
                var isValid = validation.testExp.test(value);
                if (!isValid) {
                    return validation.invalidMessage;
                }
                return undefined;
            });
            return testResults.filter(function (message) { return !!message; });
        };
    }
    return PasswordValidator;
}());
export default PasswordValidator;
