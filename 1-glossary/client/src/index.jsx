import react from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import GlossaryList from './components/GlossaryList.jsx';

class App extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      glossary: []
    }
  }

  componentDidMount() {

  }

  render() {

  }
};

ReactDOM.render(<App />, document.getElementById('app'));