import { APIClient } from "./APIClient";
import { observable, makeObservable } from "mobx";
import { MutationOptions, OperationVariables } from "@apollo/client";

class EmailVerificationViewModel {
  constructor(
    private client: APIClient,
    private submitAction: MutationOptions<any, OperationVariables>
  ) {
    makeObservable(this);
  }

  @observable
  public apiError?: string;

  @observable
  public authToken?: string;

  public setAuthToken = (token?: string) => {
    this.authToken = token;
  };

  public verifyEmail = async () => {
    this.apiError = undefined;

    try {
      return await this.client.mutate(this.submitAction);
    } catch (e) {
      this.apiError = e.message;
    }
  };
}

export default EmailVerificationViewModel;
