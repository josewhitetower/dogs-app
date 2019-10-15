import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {
    isNavBarOpen: false
  };

  handleClick = () => {
    this.setState(state => {
      return {
        isNavBarOpen: !state.isNavBarOpen
      };
    });
  };

  render() {
    const items =
      this.props.dogs.map(dog => (
        <NavLink
          to={`/dogs/${dog.src}`}
          key={dog.src}
          className="pl-2 md:mr-2 lg:mr-2 hover:opacity-75 font-semibold border-t md:border-0 lg:border-0 py-2 md:py-0 lg:py-0"
          activeClassName="bg-gray-600 md:bg-transparent lg:bg-transparent md:underline lg:underline"
        >
          {dog.name}
        </NavLink>
      ));
    return (
      <>
        <nav className="h-12 bg-gray-800 flex items-center px-2">
          <NavLink
            to="/"
            className="text-white font-bold uppercase font-sans text-xl"
          >
            <h1>Dog Shelter</h1>
          </NavLink>
          <ul className="ml-4 text-white hidden md:flex lg:flex">{items}</ul>
          <span
            className="text-white ml-auto border rounded px-2 w-8 md:hidden lg:hidden"
            onClick={this.handleClick}
          >
            <i
              className={`fa ${
                this.state.isNavBarOpen ? "fa-times" : "fa-bars"
              }`}
              aria-hidden="true"
            ></i>
          </span>
        </nav>
        {this.state.isNavBarOpen && (
          <nav className="bg-gray-800 md:hidden lg:hidden">
            <ul className="flex flex-col text-white">{items}</ul>
          </nav>
        )}
      </>
    );
  }
}

export default NavBar;
