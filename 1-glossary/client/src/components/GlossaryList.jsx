import React from 'react';
import GlossaryItem from './GlossaryItem.jsx';

const GlossaryList = (props) => (
  <div>
    <h4 style={{'textDecoration': 'underline'}}>Glossary List</h4>
    <ul>
      {props.glossary.map((entry, index) => (
        <div key={index}>
        <GlossaryItem entry={entry} item={index} delete={props.delete} edit={props.edit}/>
        </div>
      ))}
    </ul>
  </div>
);

export default GlossaryList;