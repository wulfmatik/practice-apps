import React from 'react';
import AccountDetails from './AccountDetails.jsx';
import AddressDetails from './AddressDetails.jsx';
import PaymentDetails from './PaymentDetails.jsx';

class Confirmation extends React.Component {
  constructor(props) {
    super(props);

    this.account = this.props.data.accountData;
    this.address = this.props.data.addressData;
    this.payment = this.props.data.paymentData;
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    this.props.onSubmit();
  }
  
  render() {
    return (<div>
      <h3>Account Details</h3>
      <AccountDetails data={this.account} />
      <h3>Address Details</h3>
      <AddressDetails data={this.address} />
      <h3>Payment Details</h3>
      <PaymentDetails data={this.payment} />
      <button onClick={this.onSubmit}>Purchase</button>
    </div>)
  }
};

export default Confirmation;