import React, { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import ClientProviderProps from "./clientProviderProps";
import APIClient from "../stores/APIClient";
import Authentication from "../stores/Authentication";

const ApolloClientProvider: FC<ClientProviderProps> = ({
  children,
  createClient,
}) => {
  useEffect(() => {
    setClient();

    // eslint-disable-next-line
  }, [Authentication.token]);

  const setClient = async () => {
    const token = await Authentication.getFromCache();

    APIClient.setClient(createClient(token || undefined));
  };

  if (!APIClient.client) {
    return <div />;
  }

  return <>{children}</>;
};

export default observer(ApolloClientProvider);
