import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserList extends Component {
  render() {
    const list = this.props.data.map(user => (
      <Link
        to={`/users/${user.login}`}
        key={user.id}
        className="btn btn-block btn-light text-left py-2"
      >
        {user.login}
      </Link>
    ));
    return <div className="mt-4">{list}</div>;
  }
}

export default UserList;
