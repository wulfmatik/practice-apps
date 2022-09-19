import React from 'react';

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.update();
  }

  render() {
    return (<div>
      <button onClick={this.onClick}>Click for confirmation form</button>
    </div>)
  }
};

export default Payment;