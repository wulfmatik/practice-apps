import React from 'react';

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creditCard: '',
      expiryDate: '',
      ccv: '',
      billingCode: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({[name]: value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return (<div>
      <h4>Enter Payment Information</h4>
      <form>
        <div>
          <input type='text' name='creditCard' placeholder='Card Number' value={this.state.value} onChange={this.handleChange} ></input>
        </div>
        <div>
          <input type='date' name='expiryDate' placeholder='Expiration' value={this.state.value} onChange={this.handleChange} ></input>
        </div>
        <div>
          <input type='password' name='ccv' placeholder='CCV' value={this.state.value} onChange={this.handleChange} ></input>
        </div>
        <div>
          <input type='text' name='billingCode' placeholder='Billing Zip Code' value={this.state.value} onChange={this.handleChange} ></input>
        </div>
      </form>
      <button onClick={this.handleSubmit}>Next</button>
    </div>)
  }
};

export default Payment;