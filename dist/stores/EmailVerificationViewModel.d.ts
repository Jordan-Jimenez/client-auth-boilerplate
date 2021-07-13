import { APIClient } from "./APIClient";
import { MutationOptions, OperationVariables } from "@apollo/client";
declare class EmailVerificationViewModel {
    private client;
    private submitAction;
    constructor(client: APIClient, submitAction: MutationOptions<any, OperationVariables>);
    apiError?: string;
    authToken?: string;
    setAuthToken: (token?: string | undefined) => void;
    verifyEmail: () => Promise<import("@apollo/client").FetchResult<any, Record<string, any>, Record<string, any>> | undefined>;
}
export default EmailVerificationViewModel;
