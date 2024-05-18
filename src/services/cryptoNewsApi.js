import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsApiHeaders = {
  'X-RapidAPI-Key': 'ff11df7f10msh7c48170a9cf748bp187ca7jsn2b9b55082fe2',
  'X-RapidAPI-Host': 'google-news13.p.rapidapi.com'
};

const baseUrl = 'https://google-news13.p.rapidapi.com';

const createRequest = (url, params) => ({
  url,
  headers: cryptoNewsApiHeaders,
  params
});

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptosNews: builder.query({
      query: ({params,cate}) => createRequest(`/${cate}`, params),
    })
  })
});

export const {
  useGetCryptosNewsQuery
} = cryptoNewsApi;
