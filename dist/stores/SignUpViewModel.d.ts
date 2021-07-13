import { APIClient } from "./APIClient";
import SignUpForm from "./SignUpForm";
import { MutationOptions, OperationVariables } from "@apollo/client";
declare class SignUpViewModel {
    private client;
    data: SignUpForm;
    private submitAction;
    constructor(client: APIClient, data: SignUpForm, submitAction: MutationOptions<any, OperationVariables>);
    apiError?: string;
    register: () => Promise<void>;
}
export default SignUpViewModel;
