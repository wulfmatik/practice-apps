import React from 'react';

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.update();
  }

  render() {
    return (<div>
      <button onClick={this.onClick}>Go home</button>
    </div>)
  }
};

export default Confirmation;