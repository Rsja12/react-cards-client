import React, { Component } from 'react'
import axios from 'axios'

export class Login extends Component {

    state = {
        email: '',
        password: '',
    }

    // use axios to post create request to our api endpoint,
    // pass in user object that points to obj with specific keys because of the way the action in the controller is set up,
    // pass in withCredentials: true so that we can create our cookie
    handleSubmit = (e) => {
        const { email, password,  } = this.state 
        axios.post("http://localhost:3000/sessions", {
            user: {
                email: email,
                password: password
            }
        }, 
        { withCredentials: true })
        .then(res => {
            if ( res.data.logged_in ) {
                this.props.handleSuccessfulAuth(res.data)
            } 
        })
        .catch(error => console.log('Login error', error))
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
            
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login
