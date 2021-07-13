import { observer } from "mobx-react-lite";
import React, { createContext, FC, useContext, useMemo } from "react";
import APIClient from "../stores/APIClient";
import SignInForm from "../stores/SignInForm";
import SignInViewModel from "../stores/SignInViewModel";
import FormProviderProps from "../types/FormProviderProps";

const SignInformContext = createContext<SignInViewModel | undefined>(undefined);

export const useSignInForm = () => {
  const context = useContext(SignInformContext);

  if (!context) {
    throw Error("Can not use context outside of provider");
  }

  return context;
};

const SignInFormProvider: FC<FormProviderProps> = ({
  children,
  submitAction,
}) => {
  const viewModel = useMemo(
    () => new SignInViewModel(APIClient, new SignInForm(), submitAction),
    []
  );

  return (
    <SignInformContext.Provider value={viewModel}>
      {children}
    </SignInformContext.Provider>
  );
};

export default observer(SignInFormProvider);
