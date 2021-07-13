import { APIClient } from "./APIClient";
import { makeObservable, observable } from "mobx";
import ResetPasswordForm from "./ResetPasswordForm";
import { MutationOptions, OperationVariables } from "@apollo/client";

class ResetPasswordViewModel {
  constructor(
    private client: APIClient,
    public data: ResetPasswordForm,
    public resetToken: string,
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

  public resetPassword = async () => {
    this.apiError = undefined;

    const password = this.data.passwordInput;

    try {
      if (!password.value) {
        throw new Error("Email and password values must be provided");
      }

      return await this.client.mutate(this.submitAction);
    } catch (e) {
      this.apiError = e.message;
    }
  };
}

export default ResetPasswordViewModel;
