import React from 'react';

class GlossaryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    } 
    this.onChange = this.onChange.bind(this);
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
  }

  onChange (event) {
    event.preventDefault();
    this.setState({
      term: event.target.value
    });
  }

  edit() {
    var word = prompt('Enter a word');
    var definition = prompt('Enter a definition');

    var entry = {
      filter: this.props.entry.word,
      word: word,
      definition: definition
    }
    console.log(this.props)
    this.props.edit(entry);
  }

  delete() {
    event.preventDefault();
    this.props.delete(this.props.entry.word);
  }

  render() {
    return (<div>
      <li key={this.props.index}>
      <div style={{'fontWeight': 'bold'}}>{this.props.entry.word}</div> 
      <div>{this.props.entry.definition}</div>       
      </li>  
      <button onClick={this.edit}>Edit</button>
      <button onClick={this.delete}>Delete</button>
      </div>)
  }
};

export default GlossaryItem;