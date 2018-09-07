import React, { Component } from "react";
import { connect } from "react-redux";
import { createPerson } from "../actions";
class AddPerson extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", age: "", birthplace: "", currentLocation: "" };
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submit} action="/action_page.php">
          <div
            style={{
              width: "40%",
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
              <label>
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
      </div>
    );
  }
}

export default connect(
  null,
  { createPerson }
)(AddPerson);
