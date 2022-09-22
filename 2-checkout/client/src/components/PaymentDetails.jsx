import React from 'react';

const PaymentDetails = (props) => (
  <div>
    <div>{props.data.creditCard}</div>
    <div>{props.data.expiryDate}</div>
    <div>{props.data.ccv}</div>
    <div>{props.data.billingCode}</div>
  </div>
);

export default PaymentDetails;