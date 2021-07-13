import { APIClient } from "./APIClient";
import SignInForm from "./SignInForm";
import { MutationOptions, OperationVariables } from "@apollo/client";
declare class SignInViewModel {
    private client;
    data: SignInForm;
    private submitAction;
    constructor(client: APIClient, data: SignInForm, submitAction: MutationOptions<any, OperationVariables>);
    apiError?: string;
    authToken?: string;
    signIn: () => Promise<void>;
}
export default SignInViewModel;
