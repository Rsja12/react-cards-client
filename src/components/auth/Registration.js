import React, { Component } from 'react'

export class Registration extends Component {

    state = {
        email: '',
        password: '',
        password_confirmation: '',
        registration_errors: ''
    }

    render() {
        return (
            <div>
                Registration goes here
            </div>
        )
    }
}

export default Registration
