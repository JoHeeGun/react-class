import React, { useState } from'react';

const Test = () => {
  const [visible,setVisible] = useState(0)
  return (
    <div>
      <button onClick={() => {
        setVisible('1')
      }}>
      {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <h2>good!</h2>}
    </div>

  )
}

export default Test;