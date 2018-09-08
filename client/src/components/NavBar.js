import React from "react";
import { connect } from "react-redux";
import * as peopleServices from "../services/services.people";
import { filterPeople } from "../actions";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
  }
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onClick = event => {
    event.preventDefault();
    peopleServices.findPerson(this.state.search).then(response => {
      this.props.filterPeople(response.items);
    });
  };

  render() {
    return (
      <div>
        <nav className=" navbar navbar-expand-lg navbar-dark bg-info">
          <h3 className="navbar-brand appName">TaskList</h3>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav  ml-lg-auto">
              <li className="nav-item ">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/members">
                  Members
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Contact Us
                </a>
              </li>
            </ul>
            <form className="form-inline ml-lg-4" onSubmit={this.onClick}>
              <input
                className="form-control mr-sm-2"
                type="search"
                name="search"
                value={this.state.search}
                onChange={this.onChange}
                placeholder="Search Users"
                aria-label="Search"
              />
              <button
                className="btn btn-secondary my-2 my-sm-0"
                type="submit"
                onClick={this.onClick}
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
export default connect(
  null,
  { filterPeople }
)(NavBar);
