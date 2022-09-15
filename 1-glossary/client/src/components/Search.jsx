import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <form>
        <input id="search-field" placeholder="Search"></input>
        <button>Search</button>
      </form>
    </div>)
  }
};

export default Search;