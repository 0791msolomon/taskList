import React, { Component } from "react";

class SearchBoxes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderList = () => {
    return this.props.searches.map(item => {
      return (
        <li
          style={{ height: "40px", marginTop: "0.5%" }}
          className=" col-12 list-group-item list-group-item-info"
          key={item}
        >
          {item}
        </li>
      );
    });
  };
  render() {
    return (
      <div id="container">
        <ul style={{ padding: "0", margin: "0" }}>{this.renderList()}</ul>
      </div>
    );
  }
}
export default SearchBoxes;
