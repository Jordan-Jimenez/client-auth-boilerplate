import { observer } from "mobx-react-lite";
import React, { createContext, useContext, useMemo } from "react";
import APIClient from "../stores/APIClient";
import SignUpForm from "../stores/SignUpForm";
import SignUpViewModel from "../stores/SignUpViewModel";
var SignUpformContext = createContext(undefined);
export var useSignUpForm = function () {
    var context = useContext(SignUpformContext);
    if (!context) {
        throw Error("Can not use context outside of provider");
    }
    return context;
};
var SignUpFormProvider = function (_a) {
    var children = _a.children, submitAction = _a.submitAction;
    var viewModel = useMemo(function () { return new SignUpViewModel(APIClient, new SignUpForm(), submitAction); }, []);
    return (React.createElement(SignUpformContext.Provider, { value: viewModel }, children));
};
export default observer(SignUpFormProvider);
