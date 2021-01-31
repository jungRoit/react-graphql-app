import React from 'react';
import ListViewItem from '../LIstViewItem';
import './style.css';

const ListView = (props) => {
  return (
    <div className="listview">
      {props.products && props.products.map((picture, index) => (
        <h1>Test</h1>
        // <ListViewItem key={index} picture={picture} onAuthorSelected={props.onAuthorSelected} />
      ))}
    </div>
  );
};

export default ListView;
