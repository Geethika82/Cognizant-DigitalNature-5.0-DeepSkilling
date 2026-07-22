import React, { Component } from "react";

import GuestPage from "./Components/GuestPage";
import UserPage from "./Components/UserPage";

import "./App.css";

class App extends Component {

  constructor() {
    super();

    this.state = {
      isLoggedIn: false
    };
  }

  login = () => {
    this.setState({
      isLoggedIn: true
    });
  };

  logout = () => {
    this.setState({
      isLoggedIn: false
    });
  };

  render() {

    let page;

    if (this.state.isLoggedIn) {
      page = <UserPage />;
    } else {
      page = <GuestPage />;
    }

    return (

      <div className="App">

        <h1>Ticket Booking Application</h1>

        {this.state.isLoggedIn ? (

          <button onClick={this.logout}>
            Logout
          </button>

        ) : (

          <button onClick={this.login}>
            Login
          </button>

        )}

        <hr />

        {page}

      </div>

    );
  }
}

export default App;