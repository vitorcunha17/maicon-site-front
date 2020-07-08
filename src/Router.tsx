import React, { FunctionComponent } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Landing from './pages/Landing'

const Router: FunctionComponent = ({ }) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={Landing} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router