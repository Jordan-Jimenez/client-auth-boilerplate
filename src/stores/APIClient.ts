import { makeObservable, observable } from "mobx";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";

export class APIClient {
  constructor() {
    makeObservable(this);
  }

  @observable
  public client?: ApolloClient<NormalizedCacheObject>;

  public setClient = (client: ApolloClient<NormalizedCacheObject>) => {
    this.client = client;
  };

  public get mutate() {
    if (!this.client?.mutate) {
      throw new Error("client not instantiated");
    }

    return this.client.mutate;
  }

  public get query() {
    if (!this.client?.query) {
      throw new Error("client not instantiated");
    }

    return this.client.query;
  }
}

export default new APIClient();
