import React from 'react';

class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addressLine1: '',
      addressLine2: '',
      city: '',
      usState: '',
      zipCode: '',
      phone: ''
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
      <h4>Enter Address Information</h4>
      <form>
        <div>
          <input type='text' name='addressLine1' placeholder='Street 1' value={this.state.value} onChange={this.handleChange}></input>
        </div>
        <div>
          <input type='text' name='addressLine2' placeholder='Street 2' value={this.state.value} onChange={this.handleChange}></input>
        </div>
        <div>
          <input type='text' name='city' placeholder='City' value={this.state.value} onChange={this.handleChange}></input>
        </div>
        <div>
          <input type='text' name='usState' placeholder='State' value={this.state.value} onChange={this.handleChange}></input>
        </div>
        <div>
          <input type='text' name='zipCode' placeholder='Zipcode' value={this.state.value} onChange={this.handleChange}></input>
        </div>
        <div>
          <input type='text' name='phone' placeholder='Phone' value={this.state.value} onChange={this.handleChange}></input>
        </div>
      </form>
      <button onClick={this.handleSubmit}>Next</button>
    </div>)
  }
};

export default Address;