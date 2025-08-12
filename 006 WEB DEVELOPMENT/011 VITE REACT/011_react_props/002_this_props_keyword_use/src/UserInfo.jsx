import React from "react";

class UserInfo extends React.Component {
  render() {
    return <p>User Name: {this.props.username}</p>;
  }
}

export default UserInfo;