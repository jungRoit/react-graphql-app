import React from 'react';
import ListViewItem from '../LIstViewItem';
import './style.css';

const ListView = (props) => {
  return (
    <div className="listview">
      {props.products && props.products.map((product) => (
        <ListViewItem key={product._id} product={product}  />
      ))}
    </div>
  );
};

export default ListView;
