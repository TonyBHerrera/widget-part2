import React, { Component } from "react"
import { NavLink } from "react-router-dom"

class NavigationContainer extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="nav-wrapper">
                <div className="nav-link-wrapper">
                    <NavLink exact to="/">
                        Home
                </NavLink>
                    <NavLink exact to="/lottery">
                        Kinda lottery
                </NavLink>
                    <NavLink exact to="/remove-first-last">
                        remove first and last
                </NavLink>
                    <NavLink exact to="/thing">
                        Thing one
                </NavLink>
                    <NavLink exact to="/thing2">
                        Thing Two
                </NavLink>
                    <NavLink exact to="/thing3">
                        Thing Three
                </NavLink>
                    <NavLink exact to="/thing4">
                        Thing Four
                </NavLink>
                    <NavLink exact to="/thing5">
                        Thing Five
                </NavLink>
                </div>
            </div>

        )
    }
}

export default NavigationContainer