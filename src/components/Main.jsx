import React, { Component } from "react";
import Search from "./Search";
import UserList from "./UserList";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(e) {
    e.preventDefault();
    let search = e.target.elements.search.value;
    // console.log(search);
    fetch(`https://api.github.com/search/users?q=${search}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ data: data.items });
      });
  }
  render() {
    return (
      <div className="container">
        <Search handleSearch={this.handleSearch} />
        <UserList data={this.state.data} />
      </div>
    );
  }
}

export default Main;
