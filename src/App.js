import React from "react";
import "./App.css";
// import User from "./User";
import HomeContainers from "./containers/HomeContainers";
import HeaderContainers from "./containers/HeaderContainers";
function App() {
  return (
    <div className="App">
      {/* <User data={{ name: "Ram", age: "30", add: "Mira Road" }} /> */}
      <HeaderContainers />
      <HomeContainers />
    </div>
  );
}

export default App;
