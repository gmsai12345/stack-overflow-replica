import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";

function App() {
  return (
    <div className="App">
      <Header/>
    </div>
  );
}
ReactDOM.render(<div>{App()}</div>, document.getElementById("root"));

export default App;
