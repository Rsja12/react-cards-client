import React, { Component } from 'react'
import axios from 'axios'

import Registration from './auth/Registration'
import Login from './auth/Login'

export class Home extends Component {

    // takes in res.data from handleSubmit in Registration component or Login component
    handleSuccessfulAuth = (data) => {
        // update parent component 
        this.props.handleLogin(data)
        this.props.history.push('/dashboard')
    }

    handleLogoutClick = () => {
        axios.delete("http://localhost:3000/logout", { withCredentials: true })
        // if request works we just want to call handleLogout
        .then( res => this.props.handleLogout() )
        .catch( error => console.log("logout err", error) )
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Home</h1>
                <h1>Status: {this.props.loggedInStatus}</h1>
                <button onClick={this.handleLogoutClick}>Logout</button>
                <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
                <Login handleSuccessfulAuth={this.handleSuccessfulAuth}/>
            </div>
        )
    }
}

export default Home
