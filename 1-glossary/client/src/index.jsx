import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import GlossaryList from './components/GlossaryList.jsx';
import Search from './components/Search.jsx';
import WordEntry from './components/WordEntry.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      glossary: [],
    }
    this.search = this.search.bind(this);
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
    this.updateList = this.updateList.bind(this);
  }

  componentDidMount() {
   this.updateList();
  }

  search(term) {
    event.preventDefault();
    axios.get('/glossary', {
      params: {word: term}
    })
      .then((response) => {
        this.setState({glossary: response.data});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateList() {
    axios.get('/glossary', {
      params: {}
    })
      .then((response) => {
       this.setState({glossary: response.data});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  edit(entry) {
   axios.put('/glossary', entry)
     .then(() => {
      this.updateList();
     })
     .catch((err) => {
      console.log(err);
     })
  }

  delete(entry) {
    axios.delete('/glossary', {
      data: {word: entry}
    })
      .then(() => {
        this.updateList();
      })
      .catch((err) => {
        console.log(err);
      });
  }



  render() {
    return (<div>
      <h1>Glossary App</h1>
      <WordEntry update={this.updateList.bind(this)}/>
      <Search onSearch={this.search.bind(this)}/>
      <GlossaryList glossary={this.state.glossary} delete={this.delete.bind(this)} edit={this.edit.bind(this)} />
    </div>)
  }
};

ReactDOM.render(<App />, document.getElementById('root'));