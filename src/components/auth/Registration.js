import React, { Component } from 'react'

export class Registration extends Component {

    state = {
        email: '',
        password: '',
        password_confirmation: '',
        registration_errors: ''
    }

    handleSubmit = (e) => {
        console.log('submitted')
        e.preventDefault()
    }

    handleChange = (e) => {
        this.setState({
            email: e.target.value 
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={this.state.email} 
                    onChange={this.handleChange} 
                    require 
                    />
                </form>
            </div>
        )
    }
}

export default Registration
