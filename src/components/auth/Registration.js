import React, { Component } from 'react'
import axios from 'axios'

export class Registration extends Component {

    state = {
        email: '',
        password: '',
        password_confirmation: '',
        registration_errors: ''
    }

    // use axios to post create request to our api endpoint,
    // pass in user object that points to obj with specific keys because of the way the action in the controller is set up,
    // pass in withCredentials: true so that we can create our cookie
    handleSubmit = (e) => {
        const { email, password, password_confirmation } = this.state 
        axios.post("https://localhost:3001/registrations", {
            user: {
                email: email,
                password: password,
                password_confirmation: password_confirmation
            }
        }, 
        { withCredentials: true })
        .then(res => console.log('registration res', res))
        .catch(error => console.log('registration error', error))
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
