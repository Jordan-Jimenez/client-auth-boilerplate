import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
export default interface ClientProviderProps {
    createClient: (token?: string | undefined) => ApolloClient<NormalizedCacheObject>;
}
