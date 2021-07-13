import { observer } from "mobx-react-lite";
import React, { createContext, FC, useContext, useMemo } from "react";
import APIClient from "../stores/APIClient";
import ResetPasswordViewModel from "../stores/ResetPasswordViewModel";
import ResetPasswordForm from "../stores/ResetPasswordForm";
import ResetPasswordProviderProps from "./ResetPasswordProviderProps";

const ResetPasswordContext = createContext<ResetPasswordViewModel | undefined>(
  undefined
);

export const useResetPasswordContext = () => {
  const context = useContext(ResetPasswordContext);

  if (!context) {
    throw new Error("Context has not been instantiated");
  }

  if (!context?.resetToken) {
    throw Error("Reset token has not been provided");
  }

  return context;
};

const ResetPasswordProvider: FC<ResetPasswordProviderProps> = ({
  children,
  resetToken,
  submitAction,
}) => {
  const viewModel = useMemo(
    () =>
      resetToken
        ? new ResetPasswordViewModel(
            APIClient,
            new ResetPasswordForm(),
            resetToken,
            submitAction
          )
        : undefined,
    [resetToken]
  );

  return (
    <ResetPasswordContext.Provider value={viewModel}>
      {children}
    </ResetPasswordContext.Provider>
  );
};

export default observer(ResetPasswordProvider);
