import React, { Component } from 'react'

import Registration from './auth/Registration'

export class Home extends Component {

    // takes in res.data from handleSubmit in Registration component
    handleSuccessfulAuth = (data) => {
        // update parent component 
        this.props.handleLogin(data)
        this.props.history.push('/dashboard')
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <h1>Status: {this.props.loggedInStatus}</h1>
                <Registration 
                handleSuccessfulAuth={this.handleSuccessfulAuth}
                />
            </div>
        )
    }
}

export default Home
