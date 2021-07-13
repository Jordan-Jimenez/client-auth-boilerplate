import { observer } from "mobx-react-lite";
import React, { createContext, useContext, useMemo } from "react";
import APIClient from "../stores/APIClient";
import EmailVerificationViewModel from "../stores/EmailVerificationViewModel";
var EmailVerificationContext = createContext(undefined);
export var useEmailVerificationContext = function () {
    var context = useContext(EmailVerificationContext);
    if (!context) {
        throw Error("Verification credentials were incorrectly provided.");
    }
    return context;
};
var EmailVerificationProvider = function (_a) {
    var children = _a.children, submitAction = _a.submitAction;
    var viewModel = useMemo(function () { return new EmailVerificationViewModel(APIClient, submitAction); }, []);
    return (React.createElement(EmailVerificationContext.Provider, { value: viewModel }, children));
};
export default observer(EmailVerificationProvider);
