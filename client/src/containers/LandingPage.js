import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllPeople, setActivePerson } from "../actions";
import * as peopleServices from "../services/services.people";
import { Link } from "react-router-dom";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
  }
  componentDidMount() {
    this.props.getAllPeople();
    console.log(this.props.people);
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  renderList = () => {
    return this.props.people.map(person => {
      return (
        <div
          key={person.name}
          className="card mt-4 col-lg-3 col-sm-6 px-1"
          style={{ width: "18rem" }}
        >
          <div className="card-body">
            <h5 className="card-title userName">{person.name}</h5>
            <p className="card-text">
              <strong>Age: </strong>
              {person.age}
              <br />
              <strong>BirthPlace: </strong>
              {person.birthplace}
              <br />
              <strong>Current location</strong>
              {person.currentLocation}
            </p>
            <button
              type="submit"
              className="btn btn-sm btn-info"
              onClick={() => this.props.setActivePerson(person)}
            >
              View
            </button>
          </div>
        </div>
      );
    });
  };
  renderActiveUser = () => {
    return <p>hey</p>;
  };
  submit = event => {
    event.preventDefault();
    this.props.createPerson(this.state);
    this.setState({
      name: "",
      age: "",
      birthplace: "",
      currentLocation: ""
    });
  };
  render() {
    if (!this.props.people) {
      return (
        <div id="container">
          <div className="wrapper animated slideInDown">
            <div className="loader" />
            Loading...
          </div>
        </div>
      );
    }
    return (
      <div id="container">
        <div className="text-right mr-3">
          <Link to="/add">
            <button type="submit" className="btn-sm btn-success">
              Add Person &#10010;
            </button>
          </Link>
        </div>
        <div id="myModal" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-danger close"
                  data-dismiss="modal"
                >
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <p>
                  <strong>Create new task</strong>
                </p>
                <div className="input-group">
                  <input type="text" className="form-control" />
                  <span className="input-group-btn">
                    <button className="btn btn-success" type="button">
                      <strong>ADD +</strong>
                    </button>
                  </span>
                </div>
              </div>
              <div className="modal-footer" />
            </div>
          </div>
        </div>
        <div
          id="container"
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "space-around"
          }}
        >
          <div
            className="col-12"
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between"
            }}
          >
            {this.renderList()}
          </div>
          <div id="container">
            {this.props.activePerson ? this.renderActiveUser() : null}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    people: state.allPeople,
    activePerson: state.ActivePerson
  };
}

export default connect(
  mapStateToProps,
  { getAllPeople, setActivePerson }
)(LandingPage);
