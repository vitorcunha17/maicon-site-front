import React, { FunctionComponent } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Plans from './pages/Plans'
import Landing from './pages/Landing'

const Router: FunctionComponent = ({ }) => {
    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute exact path="/planos" component={Plans} />
                <Route component={Landing} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router