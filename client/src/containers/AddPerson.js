import React, { Component } from "react";
import { connect } from "react-redux";
import { createPerson } from "../actions";
import * as peopleServices from "../services/services.people";
import { Link } from "react-router-dom";
class AddPerson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      birthplace: "",
      currentLocation: "",
      tasks: []
    };
  }
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  renderTasks = () => {
    return this.state.tasks.map(char => {
      return (
        <div key={char} className="mt-4">
          <input className="form-control" placeholder={`Task ${char}`} />
        </div>
      );
    });
  };
  addTask = event => {
    event.preventDefault();
    this.setState({
      tasks: [...this.state.tasks, this.state.tasks.push(1)]
    });
  };
  submit = event => {
    event.preventDefault();
    peopleServices.addPerson(this.state).then(response => {
      this.setState({
        name: "",
        age: "",
        birthplace: "",
        currentLocation: ""
      });
    });
  };
  render() {
    return (
      <div id="container ">
        <div className="text-right mr-3 mb-3">
          <Link to="/members">
            <button type="submit" className="btn-sm btn-success">
              Back
            </button>
          </Link>
        </div>
        <div className="row">
          <form
            onSubmit={this.submit}
            action="/action_page.php"
            className="col-md-6"
          >
            <div
              style={{
                marginLeft: "1%",
                border: "solid",
                padding: "5%"
              }}
            >
              {" "}
              <h3 style={{ textAlign: "center" }}>
                <strong>Create Person</strong>
              </h3>
              <div className="form-group">
                <label className="text-left">
                  <strong>Name</strong>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>
                  <strong>Age</strong>
                </label>
                <input
                  className="form-control"
                  type="number"
                  name="age"
                  value={this.state.age}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>
                  <strong>birthplace</strong>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="birthplace"
                  value={this.state.birthplace}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>
                  <strong>Current Location</strong>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="currentLocation"
                  value={this.state.currentLocation}
                  onChange={this.onChange}
                />
              </div>
              <button className="btn-primary" onClick={this.submit}>
                Add Person
              </button>
            </div>
          </form>
          <form
            onSubmit={this.submit}
            action="/action_page.php"
            className="col-md-6 "
          >
            <div
              style={{
                marginLeft: "1%",
                border: "solid",
                padding: "5%"
              }}
            >
              {" "}
              <h3 style={{ textAlign: "center" }}>
                <strong>Assign Tasks</strong>
              </h3>
              <button
                type="button"
                className="btn btn-success btn-lg"
                onClick={this.addTask}
              >
                &#10010;
              </button>
              {this.renderTasks()}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { createPerson }
)(AddPerson);
