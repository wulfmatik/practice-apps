import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import GlossaryList from './components/GlossaryList.jsx';
import Search from './components/Search.jsx';
import AddWord from './components/AddWord.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      glossary: []
    }
  }

  componentDidMount() {
   return axios.get('http://localhost:3000/glossary')
     .then((response) => {
      console.log(response);
     })
  }

  render() {
    return (<div>
      <h1>Hello There</h1>
    </div>)
  }
};

ReactDOM.render(<App />, document.getElementById('root'));