import React from 'react';


const Detail = (props) => {
  return(
    <div>
      <h2>오늘의 음식</h2>
      {props.id} / {props.name} / {props.contnent}
    </div>
  )
}

export default Detail;