var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { makeObservable, observable } from "mobx";
var APIClient = /** @class */ (function () {
    function APIClient() {
        var _this = this;
        this.setClient = function (client) {
            _this.client = client;
        };
        makeObservable(this);
    }
    Object.defineProperty(APIClient.prototype, "mutate", {
        get: function () {
            var _a;
            if (!((_a = this.client) === null || _a === void 0 ? void 0 : _a.mutate)) {
                throw new Error("client not instantiated");
            }
            return this.client.mutate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(APIClient.prototype, "query", {
        get: function () {
            var _a;
            if (!((_a = this.client) === null || _a === void 0 ? void 0 : _a.query)) {
                throw new Error("client not instantiated");
            }
            return this.client.query;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        observable
    ], APIClient.prototype, "client", void 0);
    return APIClient;
}());
export { APIClient };
export default new APIClient();
