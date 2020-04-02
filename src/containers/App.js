import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from '../components/Home'
import Dashboard from '../components/Dashboard'

export class App extends Component {

    state = {
        loggedInStatus: 'NOT_LOGGED_IN',
        user: {}
    }

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route 
                        exact path={'/'} 
                        render={ props => (
                            <Home {...props} loggedInStatus={this.state.loggedInStatus} />
                        )} 
                        />
                        <Route 
                        exact path={'/dashboard'}
                        render={ props => (
                            <Dashboard {...props} loggedInStatus={this.state.loggedInStatus} />
                        ) }
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App
