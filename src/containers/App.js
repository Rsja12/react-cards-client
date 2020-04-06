import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'

import Home from '../components/Home'
import Dashboard from '../components/Dashboard'

export class App extends Component {

    state = {
        loggedInStatus: false,
        user: {}
    }

    // check if the cookie is installed in browser by sending get request to logged_in endpoint
    checkLoginStatus = () => {
        axios.get("http://localhost:3000/logged_in", { withCredentials: true })
        .then( res => {
            if ( res.data.logged_in && this.state.loggedInStatus === false ) {
                this.setState({
                    loggedInStatus: true,
                    user: res.data.user 
                })
            } 
            else if ( !res.data.logged_in && this.state.loggedInStatus === true ) {
                this.setState({
                    loggedInStatus: false,
                    user: {}
                })
            }
        })
        .catch( error => console.log(error) )
    }

    // takes in data from handleSubmit in Registration component
    handleLogin = (data) => {
        this.setState({
            loggedInStatus: true,
            user: data.user  
        })
    }

    handleLogout = () => {
        this.setState({
            loggedInStatus: false,
            user: {}
        })
    }

    componentDidMount() {
       this.checkLoginStatus()
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <Router>
                    <div>
                        <Route 
                        exact path="/" 
                        render={ props => (
                            !this.state.loggedInStatus ? ( 
                                <Home {...props}
                                handleLogin={this.handleLogin}
                                handleLogout={this.handleLogout}
                                />
                                ) : (
                                <Dashboard {...props}
                                exact path="/dashboard"
                                handleLogout={this.handleLogout}
                                />
                            )
                        ) }
                        />
                    </div>
                </Router>
            </div>
        )
    }
}

export default App
