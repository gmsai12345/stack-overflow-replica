import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Header/>
      </Router>
    </div>
  );
}
ReactDOM.render(<div>{App()}</div>, document.getElementById("root"));

export default App;