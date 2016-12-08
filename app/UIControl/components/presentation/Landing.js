import React,{Component, PropTypes} from 'react';



const Landing = ({handleClick})=>{


        return (<div id='Landing'>
          <div
            className='inner'
            onClick={()=>handleClick()}>
<h1>
  <span className='name'>Bryan Schauerte</span></h1>
<h3>A Software Engineer</h3>
<p><span className='subHeader' >Mostly using <span style={{color:'#5ed5fb'}}>Reactjs</span> and <span style={{color:'#cc2c38'}}>Angular</span> to put cats on the Internets.</span></p>
<p><span className='subHeader'>Come inside and browse my recent blogs, demos and projects</span></p>

          </div>
    </div>)



}

export default Landing;
