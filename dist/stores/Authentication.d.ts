import WebCache from "../core/CacheProvider";
export declare class Authentication {
    private cacheProvider;
    constructor(cacheProvider: WebCache);
    private tokenKey;
    token?: string;
    setToken: (token: string) => Promise<void>;
    getFromCache: () => Promise<string | undefined>;
    clearToken: () => Promise<void>;
}
declare const _default: Authentication;
export default _default;
