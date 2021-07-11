import React from 'react';


let withRainbowFrame = color => Component => props => {
  let element = <Component {...props} />;
  color.forEach((el) => {
    element = <div style={{ border: `4px solid ${el}`, margin: '5px', textAlign: 'center' }}>{element}</div>
  })
  return element;
}
  ;

export { withRainbowFrame };
