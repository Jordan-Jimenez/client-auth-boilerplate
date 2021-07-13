import { APIClient } from "./APIClient";
import SignUpForm from "./SignUpForm";
import { makeObservable, observable } from "mobx";
import { MutationOptions, OperationVariables } from "@apollo/client";

class SignUpViewModel {
  constructor(
    private client: APIClient,
    public data: SignUpForm,
    private submitAction: MutationOptions<any, OperationVariables>
  ) {
    makeObservable(this);
  }

  @observable
  public apiError?: string;

  public register = async () => {
    this.apiError = undefined;
    const email = this.data.emailInput;
    const password = this.data.passwordInput;

    try {
      if (!email.value || !password.value) {
        throw new Error("Email and password values must be provided");
      }

      await this.client.mutate(this.submitAction);
    } catch (e) {
      this.apiError = e.message;
    }
  };
}

export default SignUpViewModel;
