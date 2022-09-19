import React from 'react';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.update();
  }

  render() {
    return (<div>
      <button onClick={this.onClick}>Click for Address form</button>
    </div>)
  }
};

export default Account;