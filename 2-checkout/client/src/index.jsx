import React from 'react';
import ReactDOM from 'react-dom'
import Account from './components/Account.jsx';
import Address from './components/Address.jsx';
import Payment from './components/Payment.jsx';
import Confirmation from './components/Confirmation.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: ''
    }
    this.accountSwitch = this.accountSwitch.bind(this);
    this.addressSwitch = this.addressSwitch.bind(this);
    this.paymentSwitch = this.paymentSwitch.bind(this);
    this.confirmationSwitch = this.confirmationSwitch.bind(this);
  }

  componentDidMount() {
    this.setState({currentView: 'home'});
  }

  accountSwitch() {
    this.setState({currentView: 'account'});
  }

  addressSwitch() {
    this.setState({currentView: 'address'})
  }

  paymentSwitch() {
    this.setState({currentView: 'payment'});
  }

  confirmationSwitch() {
    this.setState({currentView: 'home'});
  }

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.currentView === 'home' &&
          <div>  
          <button onClick={this.accountSwitch}>Checkout</button>
          </div>}
        {this.state.currentView === 'account' && 
          <div>
          <Account update={this.addressSwitch} />
          </div>}
        {this.state.currentView === 'address' && 
          <div>
            <Address update={this.paymentSwitch} />
          </div>}
        {this.state.currentView === 'payment' && 
          <div>
            <Confirmation update={this.confirmationSwitch} />
          </div>}
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('root'));

// return (<div>
//   <p>Hello, World!</p>
//   <p>
//     <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
//   </p>
// </div>)