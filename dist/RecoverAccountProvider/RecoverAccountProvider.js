import { observer } from "mobx-react-lite";
import React, { createContext, useContext, useMemo } from "react";
import APIClient from "../stores/APIClient";
import RecoverAccountViewModel from "../stores/RecoverAccountViewModel";
import InputHandler from "../stores/InputHandler";
import PasswordValidator from "../core/validators/PasswordValidator";
var RecoverAccountContext = createContext(undefined);
export var useRecoverAccountContext = function () {
    var context = useContext(RecoverAccountContext);
    if (!context) {
        throw new Error("Context has not been instantiated");
    }
    return context;
};
var RecoverAccountProvider = function (_a) {
    var children = _a.children, submitAction = _a.submitAction;
    var viewModel = useMemo(function () {
        return new RecoverAccountViewModel(APIClient, new InputHandler(new PasswordValidator()), submitAction);
    }, []);
    return (React.createElement(RecoverAccountContext.Provider, { value: viewModel }, children));
};
export default observer(RecoverAccountProvider);
