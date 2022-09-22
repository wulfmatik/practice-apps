import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';
import Account from './components/Account.jsx';
import Address from './components/Address.jsx';
import Payment from './components/Payment.jsx';
import Confirmation from './components/Confirmation.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: '',
      accountData: {},
      addressData: {},
      paymentData: {}
    }
    this.initializeCheckout = this.initializeCheckout.bind(this);
    this.accountDataHandler = this.accountDataHandler.bind(this);
    this.addressDataHandler = this.addressDataHandler.bind(this);
    this.paymentDataHandler = this.paymentDataHandler.bind(this);
    this.saveDetails = this.saveDetails.bind(this);
  }

  componentDidMount() {
    this.setState({currentView: 'home'});
  }

  initializeCheckout() {
    this.setState({currentView: 'account'});
  }

  accountDataHandler(data) {
    this.setState({accountData: data, currentView: 'address'});
  }

  addressDataHandler(data) {
    this.setState({addressData: data, currentView: 'payment'});
  }

  paymentDataHandler(data) {
    this.setState({paymentData: data, currentView: 'confirmation'});
  }

  saveDetails() {
    var address = {address: Object.values(this.state.addressData).join(',')};
    var completeData = Object.assign(this.state.accountData, address, this.state.paymentData);

    axios.post('/checkout', completeData)
      .then((response) => {
        console.log(response);
        this.setState({currentView: 'home', accountData: {}, addressData: {}, paymentData: {}});
      })
      .catch((err) => {
        console.log(err);
      })

  }


  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Checkout App</h1>
        {this.state.currentView === 'home' &&
          <div>  
          <h4>Click!</h4>  
          <button onClick={this.initializeCheckout}>Checkout</button>
          </div>}
        {this.state.currentView === 'account' && 
          <div>
          <Account onSubmit={this.accountDataHandler} />
          </div>}
        {this.state.currentView === 'address' && 
          <div>
            <Address onSubmit={this.addressDataHandler} />
          </div>}
        {this.state.currentView === 'payment' && 
          <div>
            <Payment onSubmit={this.paymentDataHandler} />
          </div>}  
        {this.state.currentView === 'confirmation' && 
          <div>
            <Confirmation onSubmit={this.saveDetails} data={this.state}/>
          </div>}
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('root'));
