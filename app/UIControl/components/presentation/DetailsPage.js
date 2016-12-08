import React from 'react';

import Display from './Display';


const DetailsPage = ({categories, categorySelected, contents})=>{
console.log(contents, 'contents')
  return (
    <div id='DetailsPage'>
      {/* container one */}
        <div className='outerContainer' >

          <div className='innerContainer'>

          {/* <Display key={Math.random()} contents={contents}/> */}
          </div>

        </div>
{/* end container one */}


{/* start container two */}
        <div className='itemOuterCon'>
          <div className='itemInnerCon' >



          </div>
        </div>
{/* end container two */}

    </div>)
}

export default DetailsPage;
