import React, { Component } from 'react'
import axios from 'axios'

export class Dashboard extends Component {

    handleLogoutClick = () => {
        axios.delete("http://localhost:3000/logout", { withCredentials: true })
        // if request works we just want to call handleLogout
        .then( res => this.props.handleLogout() )
        .catch( error => console.log("logout err", error) )
    }
    
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <button onClick={this.handleLogoutClick}>Logout</button>
            </div>
        )
    }
}

export default Dashboard



