import { observer } from "mobx-react-lite";
import React, { createContext, useContext, useMemo } from "react";
import APIClient from "../stores/APIClient";
import SignInForm from "../stores/SignInForm";
import SignInViewModel from "../stores/SignInViewModel";
var SignInformContext = createContext(undefined);
export var useSignInForm = function () {
    var context = useContext(SignInformContext);
    if (!context) {
        throw Error("Can not use context outside of provider");
    }
    return context;
};
var SignInFormProvider = function (_a) {
    var children = _a.children, submitAction = _a.submitAction;
    var viewModel = useMemo(function () { return new SignInViewModel(APIClient, new SignInForm(), submitAction); }, []);
    return (React.createElement(SignInformContext.Provider, { value: viewModel }, children));
};
export default observer(SignInFormProvider);
