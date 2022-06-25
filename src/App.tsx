import {gql,ApolloClient, InMemoryCache, useQuery} from "@apollo/client";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { Event } from "./pages/Event";
import {Router} from "./router"
import {client} from './lib/apollo'
import { ApolloProvider } from '@apollo/client';

import {BrowserRouter} from "react-router-dom"

function App(){
  

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
      <Router/>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
