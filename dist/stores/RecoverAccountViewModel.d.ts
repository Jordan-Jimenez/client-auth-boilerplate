import { APIClient } from "./APIClient";
import InputHandler from "./InputHandler";
import { MutationOptions, OperationVariables } from "@apollo/client";
declare class RecoverAccountViewModel {
    private client;
    email: InputHandler;
    private submitAction;
    constructor(client: APIClient, email: InputHandler, submitAction: MutationOptions<any, OperationVariables>);
    apiError?: string;
    resetPassword: () => Promise<void>;
}
export default RecoverAccountViewModel;
