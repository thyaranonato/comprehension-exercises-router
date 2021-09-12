import React, { Component } from 'react';

class Users extends Component {
  render() {
    const { greetingsMessage } = this.props
    return (
      <div>
        <h2>Users</h2>
        <p> { greetingsMessage }, this is my awesome Users component! </p>
      </div>
    );
  }
};

export default Users;
