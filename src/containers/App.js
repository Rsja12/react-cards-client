import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
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
        .then( res => {
            if ( res.data.logged_in && this.state.loggedInStatus === 'NOT LOGGED IN' ) {
                this.setState({
                    loggedInStatus: 'LOGGED IN',
                    user: res.data.user 
                })
            } 
            else if ( !res.data.logged_in && this.state.loggedInStatus === 'LOGGED IN' ) {
                this.setState({
                    loggedInStatus: 'NOT LOGGED IN',
                    user: {}
                })
            }
        })
        .catch( error => console.log(error) )
    }

    // takes in data from handleSubmit in Registration component
    handleLogin = (data) => {
        this.setState({
            loggedInStatus: 'LOGGED IN',
            user: data.user  
        })
    }

    handleLogout = () => {
        this.setState({
            loggedInStatus: 'NOT LOGGED IN',
            user: {}
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
                            this.state.loggedInStatus === 'LOGGED IN' ? (
                                <Dashboard {...props} 
                                loggedInStatus={this.state.loggedInStatus}
                                handleLogout={this.handleLogout}
                                 />
                            ) : (
                                <Home {...props} 
                                loggedInStatus={this.state.loggedInStatus}
                                handleLogin={this.handleLogin} 
                                handleLogout={this.handleLogout}
                                />
                            )
                        ) }
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App
