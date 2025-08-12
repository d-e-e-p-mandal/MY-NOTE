import React from "react";
import { MessageContext } from "../Context/MessageContext";

class CComponent extends React.Component {
  render() {
    return (
      <div className="border">
        <h1>Class Component</h1>
        <hr />
        <MessageContext.Consumer>
          {(message) => <h2>{message}</h2>}
        </MessageContext.Consumer>
      </div>
    );
  }
}

export default CComponent;