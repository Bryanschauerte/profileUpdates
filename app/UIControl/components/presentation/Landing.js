import React from 'react';

const Landing = ({changeIndex}) => {
  return(<div>
    <h1>welcome</h1>
    <input
      onClick={()=>changeIndex(1)}
      type='button'
      value='Take A Look Around'/>
  </div>)
}
export default Landing;
