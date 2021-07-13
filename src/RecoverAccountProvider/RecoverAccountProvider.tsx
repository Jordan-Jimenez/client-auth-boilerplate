import { observer } from "mobx-react-lite";
import React, { createContext, FC, useContext, useMemo } from "react";
import APIClient from "../stores/APIClient";
import RecoverAccountViewModel from "../stores/RecoverAccountViewModel";
import InputHandler from "../stores/InputHandler";
import PasswordValidator from "../core/validators/PasswordValidator";
import FormProviderProps from "../types/FormProviderProps";

const RecoverAccountContext = createContext<
  RecoverAccountViewModel | undefined
>(undefined);

export const useRecoverAccountContext = () => {
  const context = useContext(RecoverAccountContext);

  if (!context) {
    throw new Error("Context has not been instantiated");
  }

  return context;
};

const RecoverAccountProvider: FC<FormProviderProps> = ({
  children,
  submitAction,
}) => {
  const viewModel = useMemo(
    () =>
      new RecoverAccountViewModel(
        APIClient,
        new InputHandler(new PasswordValidator()),
        submitAction
      ),
    []
  );

  return (
    <RecoverAccountContext.Provider value={viewModel}>
      {children}
    </RecoverAccountContext.Provider>
  );
};

export default observer(RecoverAccountProvider);
