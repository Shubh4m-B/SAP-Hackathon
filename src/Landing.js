import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

export class Landing extends Component {
    render() {
        return (
            <div className="Landing">
                <div className="Landing-circle-1"></div>
                <div className="Landing-circle-2"></div>
                <div className="Landing-container">
                    <img src="/Logo.ico" alt="Logo"></img>
                    <h1 className="Landing-title">Blooming Soul</h1>
                    <Link to='/login' className="Landing-button">Get Started</Link>
                </div>
            </div>
        )
    }
}

export default Landing
