import React from 'react';

import WildCard from './WildCard';


const DetailsPage = ({categories, categorySelected, contents})=>{
console.log(contents, 'contents')
  return (
    <div id='DetailsPage'>
      {/* container one */}
        <div className='outerContainer' >

          <div className='innerContainer'>

          {/* <WildCard key={Math.random()} contents={contents}/> */}
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
