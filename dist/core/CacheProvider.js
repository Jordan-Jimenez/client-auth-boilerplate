import JsCookie from "js-cookie";
var WebCache = /** @class */ (function () {
    function WebCache() {
        this.setItem = function (key, value) {
            JsCookie.set(key, value);
        };
        this.getItem = function (key) {
            return JsCookie.get(key);
        };
        this.removeItem = function (key) {
            JsCookie.remove(key);
        };
    }
    return WebCache;
}());
export default WebCache;
