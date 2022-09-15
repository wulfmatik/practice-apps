import React from 'react';
import Search from './Search.jsx';

const GlossaryList = (props) => (
  <div>
    <h4>Glossary List</h4>
    <ul>
      {props.glossary.map((entry, index) => (
        <div key={index}>
        <li>{entry.word} : {entry.definition}</li>
        <button>Edit</button>
        <button>Delete</button>
        </div>
      ))}
    </ul>
  </div>
);

export default GlossaryList;