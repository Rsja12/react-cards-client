import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from '../components/Home'
import Dashboard from '../components/Dashboard'

export class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path={'/'} component={Home} />
                        <Route exact path={'/dashboard'} component={Dashboard} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App
