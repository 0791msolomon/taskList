import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllPeople, setActivePerson } from "../actions";
import * as peopleServices from "../services/services.people";

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
        <div key={person.name} className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{person.name}</h5>
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
    return (
      <div style={{ textAlign: "center" }} className="jumbotron mx-5">
        <div className="container">
          <h1 className="display-3">
            <strong>User Name: </strong>
            {this.props.activePerson.name}
          </h1>
          <button className="btn-success">Edit User</button>

          <button className="btn-danger" style={{ marginLeft: "1%" }}>
            Delete User
          </button>
          <hr className="my-4" />
          <p>
            <strong>Name: </strong>
            {this.props.activePerson.name}
            <br />
            <strong>Age: </strong>
            {this.props.activePerson.age}
            <br />
            <strong>Birthplace: </strong>
            {this.props.activePerson.birthplace}
            <br />
            <strong>Current Location: </strong>
            {this.props.activePerson.currentLocation}
          </p>
          <p className="lead">
            <a
              className="btn btn-primary btn-lg"
              href="#"
              role="button"
              data-toggle="collapse"
              data-target="#taskList"
              style={{ marginRight: "1%" }}
            >
              Show Task List
            </a>
            <a
              className="btn btn-primary btn-lg"
              href="#"
              role="button"
              data-toggle="modal"
              data-target="#myModal"
            >
              Add Task
            </a>
            <div>
              <ul id="taskList" className="collapse">
                <p>
                  <strong>Tasks for {this.props.activePerson.name}</strong>
                </p>
                {this.props.activePerson.tasks ? (
                  this.props.activePerson.tasks.map(task => {
                    return <li>{task}</li>;
                  })
                ) : (
                  <li>There are no tasks for {this.props.activePerson.name}</li>
                )}
              </ul>
            </div>
          </p>
        </div>
      </div>
    );
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
      return <div>nothing yet bud</div>;
    }
    return (
      <div id="container">
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
