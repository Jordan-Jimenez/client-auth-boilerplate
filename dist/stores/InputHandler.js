var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { action, computed, makeObservable, observable } from "mobx";
var InputHandler = /** @class */ (function () {
    function InputHandler(validator) {
        var _this = this;
        this.validator = validator;
        this.setValue = function (v) {
            _this.value = v;
        };
        makeObservable(this);
    }
    Object.defineProperty(InputHandler.prototype, "isValid", {
        get: function () {
            var _a;
            return !((_a = this.errorMessages) === null || _a === void 0 ? void 0 : _a.length);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputHandler.prototype, "errorMessages", {
        get: function () {
            var _a;
            var errors = (_a = this.validator) === null || _a === void 0 ? void 0 : _a.getErrorMessages(this.value);
            return errors;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        observable
    ], InputHandler.prototype, "value", void 0);
    __decorate([
        action
    ], InputHandler.prototype, "setValue", void 0);
    __decorate([
        computed
    ], InputHandler.prototype, "isValid", null);
    __decorate([
        computed
    ], InputHandler.prototype, "errorMessages", null);
    return InputHandler;
}());
export default InputHandler;
