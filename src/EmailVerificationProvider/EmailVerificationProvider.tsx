import { observer } from "mobx-react-lite";
import React, { createContext, FC, useContext, useMemo } from "react";
import APIClient from "../stores/APIClient";
import EmailVerificationViewModel from "../stores/EmailVerificationViewModel";
import FormProviderProps from "../types/FormProviderProps";

const EmailVerificationContext = createContext<
  EmailVerificationViewModel | undefined
>(undefined);

export const useEmailVerificationContext = () => {
  const context = useContext(EmailVerificationContext);

  if (!context) {
    throw Error("Verification credentials were incorrectly provided.");
  }

  return context;
};

const EmailVerificationProvider: FC<FormProviderProps> = ({
  children,
  submitAction,
}) => {
  const viewModel = useMemo(
    () => new EmailVerificationViewModel(APIClient, submitAction),
    []
  );

  return (
    <EmailVerificationContext.Provider value={viewModel}>
      {children}
    </EmailVerificationContext.Provider>
  );
};

export default observer(EmailVerificationProvider);
