import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>yoyoyo</div>;
  }
}
function mapStateToProps(state) {
  return {
    allPeople: state.allPeople
  };
}
export default connect(mapStateToProps)(Home);
