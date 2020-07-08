import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context'
import { onError } from 'apollo-link-error'
import { createUploadLink } from 'apollo-upload-client';
import DebounceLink from 'apollo-link-debounce';
import { Notification } from '../services/notification'

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token')

    return {
        headers: {
            ...headers,
            authorization: token ?? ''
        }
    }
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) => {
            console.error(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            )

            Notification.error('Error', message)
        });

    if (networkError) {
        //AlertProvider.error('Erro', networkError.message)
        console.error(`[Network error]: ${networkError}`)
        Notification.error('Error', networkError.message)
    }
})

const debounceLink = new DebounceLink(200)

const httpLink = createUploadLink({
    uri: process.env.NODE_ENV === 'development' ? 'https://api.mttct.com.br/graphql' : 'https://api.mttct.com.br/graphql'
})

const client = new ApolloClient({
    link: authLink.concat(errorLink).concat(httpLink).concat(debounceLink),
    cache: new InMemoryCache(),
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'cache-and-network',
        },
    }
})

export { client }