import { APIClient } from "./APIClient";
import { makeObservable, observable } from "mobx";
import SignInForm from "./SignInForm";
import { MutationOptions, OperationVariables } from "@apollo/client";

class SignInViewModel {
  constructor(
    private client: APIClient,
    public data: SignInForm,
    private submitAction: MutationOptions<any, OperationVariables>
  ) {
    makeObservable(this);
  }

  @observable
  public apiError?: string;

  @observable
  public authToken?: string;

  public signIn = async () => {
    this.apiError = undefined;

    const email = this.data.emailInput;

    const password = this.data.passwordInput;

    try {
      if (!email.value || !password.value) {
        throw new Error("Email and password values must be provided");
      }

      const res = await this.client.mutate(this.submitAction);

      this.authToken = res.data?.authToken;
    } catch (e) {
      this.apiError = e.message;
    }
  };
}

export default SignInViewModel;
