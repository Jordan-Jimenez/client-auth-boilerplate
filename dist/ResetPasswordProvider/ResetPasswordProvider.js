import { observer } from "mobx-react-lite";
import React, { createContext, useContext, useMemo } from "react";
import APIClient from "../stores/APIClient";
import ResetPasswordViewModel from "../stores/ResetPasswordViewModel";
import ResetPasswordForm from "../stores/ResetPasswordForm";
var ResetPasswordContext = createContext(undefined);
export var useResetPasswordContext = function () {
    var context = useContext(ResetPasswordContext);
    if (!context) {
        throw new Error("Context has not been instantiated");
    }
    if (!(context === null || context === void 0 ? void 0 : context.resetToken)) {
        throw Error("Reset token has not been provided");
    }
    return context;
};
var ResetPasswordProvider = function (_a) {
    var children = _a.children, resetToken = _a.resetToken, submitAction = _a.submitAction;
    var viewModel = useMemo(function () {
        return resetToken
            ? new ResetPasswordViewModel(APIClient, new ResetPasswordForm(), resetToken, submitAction)
            : undefined;
    }, [resetToken]);
    return (React.createElement(ResetPasswordContext.Provider, { value: viewModel }, children));
};
export default observer(ResetPasswordProvider);
