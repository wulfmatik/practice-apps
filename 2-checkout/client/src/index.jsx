import React from 'react';
// import { render } from "react-dom";
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    alert('hello');
  }

  render() {
    return (<div>
         <p>Hello, World!</p>
         <p>
           <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
         </p>
      </div>)
  }
};

ReactDOM.render(<App />, document.getElementById('root'));

