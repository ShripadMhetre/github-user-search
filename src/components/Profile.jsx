import React, { Component } from "react";
import loadingGif from "../assets/loading.gif";

class Profile extends Component {
  state = {
    user: {},
    loader: true
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`https://api.github.com/users/${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ user: data, loader: false });
      });
  }
  render() {
    const { user, loader } = this.state;
    if (loader) {
      return (
        <div className="text-center">
          <img src={loadingGif} alt="loading" />
        </div>
      );
    }
    return (
      <div className="container">
        <h1 className="text-center">{user.name}</h1>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img
                  className="card-img-top"
                  // style={{ width: "340px", height: "300px" }}
                  src={user.avatar_url}
                  alt="Avatar"
                />
                <ul
                  class="list-group"
                  // style={{ width: "340px", height: "300px" }}
                >
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    Public Repos
                    <span class="badge badge-primary badge-pill">
                      {user.public_repos}
                    </span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    Public Gists
                    <span class="badge badge-primary badge-pill">
                      {user.public_gists}
                    </span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    Following
                    <span class="badge badge-primary badge-pill">
                      {user.following}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-8 mt-5">
              <table className="table table-hover">
                <tbody>
                  {user.login ? (
                    <tr>
                      <td className="font-weight-bold">Username</td>
                      <td className="">{user.login}</td>
                    </tr>
                  ) : null}
                  {user.bio ? (
                    <tr>
                      <td className="font-weight-bold">Bio</td>
                      <td>{user.bio}</td>
                    </tr>
                  ) : null}
                  {user.company ? (
                    <tr>
                      <td className="font-weight-bold">Company</td>
                      <td>{user.company}</td>
                    </tr>
                  ) : null}
                  {user.location ? (
                    <tr>
                      <td className="font-weight-bold">Located</td>
                      <td>{user.location}</td>
                    </tr>
                  ) : null}
                  {user.created_at ? (
                    <tr>
                      <td className="font-weight-bold">Account Created</td>
                      <td>{user.created_at.split("T")[0]}</td>
                    </tr>
                  ) : null}

                  {user.blog ? (
                    <tr>
                      <td className="font-weight-bold">
                        <span>Blog:</span>
                      </td>
                      <td>
                        <a href={user.blog}>{user.blog}</a>
                      </td>
                    </tr>
                  ) : null}
                </tbody>
              </table>

              {user.html_url ? (
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-block mb-3"
                >
                  Click here to go to github !
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
