import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders={
    'X-RapidAPI-Key': 'fbb7786bb5mshf0071c9971bc774p10624ejsn9825d88d93c9',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl ='https://coinranking1.p.rapidapi.com';

const createRequest=(url)=>({url,headers:cryptoApiHeaders})
const referenceCurrencyUuid='yhjMzLPhuIDl'

const createRequestDetail=(url,timePeriod)=>({url,headers:cryptoApiHeaders,params:{referenceCurrencyUuid,timePeriod}})

export const cryptoApi=createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)

        }),
        getCryptoHisotry: builder.query({
            query: ({coinId,timePeriod}) => createRequestDetail(`/coin/${coinId}/history`,timePeriod)
        })
    })
})

export const {
    useGetCryptosQuery,useGetCryptoDetailsQuery,useGetCryptoHisotryQuery
} = cryptoApi;
