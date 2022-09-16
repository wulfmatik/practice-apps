import React from 'react';
import axios from 'axios';

class WordEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      defintion: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('/glossary', {
      word: event.target.wordEntry.value,
      definition: event.target.defEntry.value
    })
      .then(() => {
        this.props.update();
        event.target.wordEntry.value = '';
        event.target.defEntry.value = '';
      })
      .catch((err) => {
        throw err;
      })
  }

  render() {
    return (<div>
      <form onSubmit={this.handleSubmit}>
        <input name="wordEntry" placeholder="Input Word"></input>
        <input name="defEntry" placeholder="Input Definition"></input>
        <button>Submit</button>
      </form>
    </div>)
  }
};

export default WordEntry;