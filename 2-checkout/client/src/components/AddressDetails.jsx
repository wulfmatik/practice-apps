import React from 'react';

const AddressDetails = (props) => (
  <div>
    <div>{props.data.addressLine1}</div>
    <div>{props.data.addressLine2}</div>
    <div>{props.data.city}</div>
    <div>{props.data.usState}</div>
    <div>{props.data.zipCode}</div>
    <div>{props.data.phone}</div>
  </div>
);

export default AddressDetails;