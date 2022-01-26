import React, { Component } from 'react';

import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      input: ''
    };
  }

  handleInput(e) {
    this.setState({input: e.target.value});
  }

  render() {
    return (
      <section className="Search__parent">

        <div className="Search__content">
          <input placeholder="Search Your Feed" onChange={this.handleInput.bind(this)} />

          <SearchIcon id="Search__icon" onClick={() => {this.props.searchPostFn(this.state.input)}}/>
        </div>
        
      </section>
    )
  }
}