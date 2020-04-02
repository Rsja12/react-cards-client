import React, { Component } from 'react'
import axios from 'axios'

export class Registration extends Component {

    state = {
        email: '',
        password: '',
        password_confirmation: '',
        registration_errors: ''
    }

    handleSubmit = (e) => {
        console.log('submitted')
        axios.post("https://localhost:3001/registrations")
        e.preventDefault()
    }

    handleChange = (e) => {
        this.setState({
            // uses name attr in input tags to handle change of correct input field
            [e.target.name]: e.target.value 
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
                    required 
                    />
                    <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={this.state.password} 
                    onChange={this.handleChange} 
                    required 
                    />
                    <input 
                    type="password" 
                    name="password_confirmation" 
                    placeholder="Password Confirmation"  
                    value={this.state.password_confirmation} 
                    onChange={this.handleChange} 
                    required 
                    />

                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}

export default Registration
