import React, { FunctionComponent } from 'react'
import { RouteProps, Redirect, Route } from 'react-router-dom'
import Layout from '../Layout'

const PrivateRoute: FunctionComponent<RouteProps> = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem('token')

    if (!token) {
        return <Redirect to="/" />
    }

    return (
        <Route {...rest} render={(props) => {
            return (
                <Layout>
                    <Component {...props} />
                </Layout>
            )
        }} />
    )
}

export default PrivateRoute