import React from "react";
import Station from "../src/components/Channels/index";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <header className="headerBox">
          <h1>Sverige Radio Stations</h1>
        </header>
        <Station />
      </div>
    );
  }
}

export default App;
