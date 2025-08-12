import React from "react";
import UserInfo from "./UserInfo"; // ✅ Import child

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Deep Mandal"
    };
  }

  render() {
    return (
      <div>
        <h2>Parent Component (MainApp)</h2>
        {/* Passing state value as prop */}
        <UserInfo username={this.state.username} />
      </div>
    );
  }
}

export default MainApp;


/* 
import React from "react";
import UserInfo from "./UserInfo"; // ✅ Import child

class MainApp extends React.Component {

  render() {
    return (
      <div>
        <h2>Parent Component (MainApp)</h2>
  
        <UserInfo username={"Deep Mandal"} />
      </div>
    );
  }
}

export default MainApp;

*/