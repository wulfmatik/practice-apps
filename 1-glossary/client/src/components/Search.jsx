import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange (event) {
    event.preventDefault();
    this.setState({
      term: event.target.value
    });
  }

  search() {
    event.preventDefault();
    this.props.onSearch(this.state.term);
  }

  render() {
    return (<div>
      <form>
        <input id="search-field" placeholder="Search" defaultValue={this.state.term} onChange={this.onChange}></input>
        <button onClick={this.search}>Search</button>
      </form>
    </div>)
  }
};

export default Search;