import React from 'react';


const Instructions = ({steps,title}) => {
  return(
    <div>
      <section className="instructions">
            <h2>{title}</h2>
            {steps.map((step) =>
                <p>{step}</p>
            )}
        </section>
    </div>
  )
}

export default Instructions