import React from 'react';


const Instructions = ({steps,title}) => {
  const style = {
    color:'aqua',
    backgroundColor:'tomato'
  }
  return(
    <div>
      <section className="instructions">
            <h2 style={style}>{title}</h2>
            <ol>{steps.map((step) =>
                <li>{step}</li>
            )}</ol>
            
        </section>
    </div>
  )
}

export default Instructions