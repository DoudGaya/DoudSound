import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': 'bf64b5ab1fmsh87bbce601c3ba04p177746jsnaf9ac016941f',
//     'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
//   }
// };

// fetch('https://spotify23.p.rapidapi.com/browse_all/', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//     .catch(err => console.error(err));
  

export const spotifyApi = createApi({
  reducerPath: 'spotify', // this is going to take the name of the API
  baseQuery: fetchBaseQuery({ // A function that ret
    baseUrl: 'https://spotify23.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'bf64b5ab1fmsh87bbce601c3ba04p177746jsnaf9ac016941f')
      return headers
    }
  }),
  endpoints: (builder) => ({
    browseAll: builder.query({
      query: () => '/browse_all/'
    }),
  })
})

export const {
  useBrowseAllQuery,
} = spotifyApi