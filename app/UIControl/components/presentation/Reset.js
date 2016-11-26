import React from 'react'


const Reset = ({reset}) => <div style={{position:'absolute'}}><input
  onClick={()=>reset(0)}
  type='button'
  value='Take A Look Around'/></div>

  export default Reset;
