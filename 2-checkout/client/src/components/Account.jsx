import React from 'react';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }
    this.array = [];
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
      <h4>Enter Account Information</h4>
      <form>
        <div>
        <input type="text" name="name" placeholder="Name" value={this.state.value} onChange={this.handleChange}></input>
        </div>
        <div>
        <input type="text" name="email" placeholder="Email" value={this.state.value} onChange={this.handleChange}></input>
        </div>
        <div>
        <input type="password" name="password" placeholder="Password" value={this.state.value} onChange={this.handleChange}></input>
        </div>
      </form>
      <button onClick={this.handleSubmit}>Next</button>
    </div>)
  }
};

export default Account;