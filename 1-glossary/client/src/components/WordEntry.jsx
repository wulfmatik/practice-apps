import React from 'react';

class WordEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <form>
        <input id="wordEntry" placeholder="Input Word"></input>
        <input id="defEntry" placeholder="Input Definition"></input>
        <button>Submit</button>
      </form>
    </div>)
  }
};

export default WordEntry;