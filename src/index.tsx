import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from 'react-apollo';
import { client } from './config/graphql'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './styles.css'
import { ConfigProvider } from 'antd';
import { validateMessages } from './config/validateMessages'
import { UserProvider } from './contexts/UserContext';

ReactDOM.render(
    <UserProvider>
        <ApolloProvider client={client}>
            <ConfigProvider form={{ validateMessages }}>
                <Router />
            </ConfigProvider>
        </ApolloProvider>
    </UserProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
