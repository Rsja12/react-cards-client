import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'

import Home from '../components/Home'
import Dashboard from '../components/Dashboard'

export class App extends Component {

    state = {
        loggedInStatus: 'NOT LOGGED IN',
        user: {}
    }

    // check if the cookie is installed in browser by sending get request to logged_in endpoint
    checkLoginStatus = () => {
        axios.get("http://localhost:3000/logged_in", { withCredentials: true })
        .then( res => console.log('logged in', res) )
        .catch( error => console.log(error) )
    }

    // takes in data from handleSubmit in Registration component
    handleLogin = (data) => {
        this.setState({
            loggedInStatus: 'LOGGED IN',
            user: data.user  
        })
    }

    componentDidMount() {
       this.checkLoginStatus()
    }

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route 
                        exact path={'/'} 
                        // render allows us to pass in Router props to component along with other custom props 
                        render={ props => (
                            // Home has Router props plus new ones.
                            <Home {...props} 
                            loggedInStatus={this.state.loggedInStatus}
                            handleLogin={this.handleLogin} 
                            />
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
