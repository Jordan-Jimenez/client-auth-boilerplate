import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
export declare class APIClient {
    constructor();
    client?: ApolloClient<NormalizedCacheObject>;
    setClient: (client: ApolloClient<NormalizedCacheObject>) => void;
    get mutate(): <T = any, TVariables = import("@apollo/client").OperationVariables>(options: import("@apollo/client").MutationOptions<T, TVariables>) => Promise<import("@apollo/client").FetchResult<T, Record<string, any>, Record<string, any>>>;
    get query(): <T = any, TVariables = import("@apollo/client").OperationVariables>(options: import("@apollo/client").QueryOptions<TVariables, T>) => Promise<import("@apollo/client").ApolloQueryResult<T>>;
}
declare const _default: APIClient;
export default _default;
