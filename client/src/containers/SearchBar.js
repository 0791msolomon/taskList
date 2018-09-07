import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchCriteria: "" };
  }
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  submit = () => {
    this.props.submit(this.state.searchCriteria);
    this.setState({
      searchCriteria: ""
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter Search"
          name="searchCriteria"
          onChange={this.onChange}
          value={this.state.searchCriteria}
        />
        <button className="btn-primary" onClick={this.submit}>
          hey
        </button>
      </div>
    );
  }
}
export default SearchBar;
