import { observable, makeObservable } from "mobx";
import WebCache from "../core/CacheProvider";

const tokenKeyTitle = encodeURIComponent(
  process.env.REACT_APP_CACHE_KEY as string
);

export class Authentication {
  constructor(private cacheProvider: WebCache) {
    makeObservable(this);
  }

  private tokenKey = `${encodeURIComponent(tokenKeyTitle)}token`;

  @observable
  public token?: string;

  public setToken = async (token: string) => {
    await this.cacheProvider.setItem(this.tokenKey, token);

    this.token = token;
  };

  public getFromCache = async () => {
    return await this.cacheProvider.getItem(this.tokenKey);
  };

  public clearToken = async () => {
    this.token = undefined;

    await this.cacheProvider.removeItem(this.tokenKey);
  };
}

export default new Authentication(new WebCache());
