import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'

class NavBar extends Component {

    render() {
        const items = this.props.dogs.map(dog => <NavLink to={`/dogs/${dog.src}`} key={dog.src} className="mr-2 hover:opacity-75 font-semibold" activeClassName="opacity-75">{dog.name}</NavLink>)
        return (
            <nav className="h-12 bg-gray-800 flex items-center px-2">
                <NavLink to="/" className="text-white font-bold uppercase font-sans text-xl">Dog Shelter</NavLink>
                <ul className="flex ml-4 text-white">
                    {items}
                </ul>
            </nav>
        )
    }
}

export default withRouter(NavBar);