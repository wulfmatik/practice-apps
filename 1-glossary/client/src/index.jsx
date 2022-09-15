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
      glossary: [{
        word: 'cat',
        definition: 'feline',
      
      },
      { word: 'dog',
        definition: 'best friend'
      }  
      ]
    }
  }

  componentDidMount() {
   axios.get('http://localhost:3000/glossary')
     .then((response) => {
      console.log(response);
     })
  }

  render() {
    return (<div>
      <h1>Glossary App</h1>
      <WordEntry />
      <Search />
      <GlossaryList glossary={this.state.glossary}/>
    </div>)
  }
};

ReactDOM.render(<App />, document.getElementById('root'));