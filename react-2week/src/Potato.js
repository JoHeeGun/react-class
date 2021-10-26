import React from 'react';

function Potato(props){
  return (
    <div>
      <h3>I Like Potato</h3>
      <h2>{props.fav}</h2>
      <h2>{props.vat}</h2>
    </div>
  ) 

}

export default Potato;