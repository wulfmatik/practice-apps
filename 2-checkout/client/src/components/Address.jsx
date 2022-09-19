import React from 'react';

class Address extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    console.log(this.props)
    this.props.update();
  }

  render() {
    return (<div>
      <button onClick={this.onClick}>Click for Payment Form</button>
    </div>)
  }
};

export default Address;