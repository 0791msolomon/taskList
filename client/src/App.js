import React, { Component } from "react";
import { BrowserRouter } from "react-browser-router";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import promise from "redux-promise";
import RouteComponents from "./components/RouteComponents";
import NavBar from "./components/NavBar";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { searches: [] };
  }
  submit = word => {
    this.setState({
      searches: [...this.state.searches, word]
    });
  };

  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
          <div>
            <div>
              <NavBar />
            </div>
            <div style={{ marginTop: "10%" }}>
              <RouteComponents />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
