import { ApolloClient, InMemoryCache, gql } from "@apollo/client"

export const getListData = async () => {
    // 建立链接
    const client = new ApolloClient({
        uri: "https://api.studio.thegraph.com/query/21276/nft_web3_exploer/v0.0.1",
        cache: new InMemoryCache()
    });

    const data = await client.query({
        query: gql`query res {
            transfers{
                id
                from
                to
                tokenId
            }
        }`
    });

    const list = data.data.transfers
    console.log(list)

    return list
}