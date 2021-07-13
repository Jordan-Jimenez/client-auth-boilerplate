import { APIClient } from "./APIClient";
import ResetPasswordForm from "./ResetPasswordForm";
import { MutationOptions, OperationVariables } from "@apollo/client";
declare class ResetPasswordViewModel {
    private client;
    data: ResetPasswordForm;
    resetToken: string;
    private submitAction;
    constructor(client: APIClient, data: ResetPasswordForm, resetToken: string, submitAction: MutationOptions<any, OperationVariables>);
    apiError?: string;
    authToken?: string;
    setAuthToken: (token?: string | undefined) => void;
    resetPassword: () => Promise<import("@apollo/client").FetchResult<any, Record<string, any>, Record<string, any>> | undefined>;
}
export default ResetPasswordViewModel;
