import { APIClient } from "./APIClient";
import { makeObservable, observable } from "mobx";
import InputHandler from "./InputHandler";
import { MutationOptions, OperationVariables } from "@apollo/client";

class RecoverAccountViewModel {
  constructor(
    private client: APIClient,
    public email: InputHandler,
    private submitAction: MutationOptions<any, OperationVariables>
  ) {
    makeObservable(this);
  }

  @observable
  public apiError?: string;

  public resetPassword = async () => {
    this.apiError = undefined;

    try {
      if (!this.email.isValid || !this.email.value) {
        throw new Error("A valid email must be provided");
      }

      await this.client.mutate(this.submitAction);
    } catch (e) {
      this.apiError = e.message;
    }
  };
}

export default RecoverAccountViewModel;
