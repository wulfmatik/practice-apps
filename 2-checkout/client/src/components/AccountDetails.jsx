import React from 'react';

const AccountDetails = (props) => (
  <div>
      <div>{props.data.name}</div>
      <div>{props.data.email}</div>
      <div>Password Saved</div>
  </div>
)

export default AccountDetails;