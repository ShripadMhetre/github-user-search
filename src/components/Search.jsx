import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSearch}>
        <div className="row">
          <div className="form-group col-md-9">
            <input
              type="text"
              name="search"
              className="form-control"
              placeholder="Enter github username..."
            />
          </div>
          <div className="col-md-3">
            <button className="btn btn-block btn-success">Search</button>
          </div>
        </div>
      </form>
    );
  }
}

export default Search;
