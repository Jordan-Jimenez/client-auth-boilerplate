import { observer } from "mobx-react-lite";
import React, { createContext, FC, useContext, useMemo } from "react";
import APIClient from "../stores/APIClient";
import SignUpForm from "../stores/SignUpForm";
import SignUpViewModel from "../stores/SignUpViewModel";
import FormProviderProps from "../types/FormProviderProps";

const SignUpformContext = createContext<SignUpViewModel | undefined>(undefined);

export const useSignUpForm = () => {
  const context = useContext(SignUpformContext);

  if (!context) {
    throw Error("Can not use context outside of provider");
  }

  return context;
};

const SignUpFormProvider: FC<FormProviderProps> = ({
  children,
  submitAction,
}) => {
  const viewModel = useMemo(
    () => new SignUpViewModel(APIClient, new SignUpForm(), submitAction),
    []
  );

  return (
    <SignUpformContext.Provider value={viewModel}>
      {children}
    </SignUpformContext.Provider>
  );
};

export default observer(SignUpFormProvider);
