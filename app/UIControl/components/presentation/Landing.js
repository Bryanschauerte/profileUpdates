import React,{Component, PropTypes} from 'react';



const Landing = ({handleClick})=>{


        return (<div

          style={{
          display:'flex',
          justifyContent:'center',
          width:'100%',
          height:'100%',
          flexDirection:'column'
        }}>
          <div
            style={{
              display:'flex',
              flex:'1',
              justifyContent:'center',
              alignContents:'center',
              flexDirection:'column',
              textAlign:'center',
              color:'#fff',
              cursor:'pointer'
            }}
            onClick={()=>handleClick()}>
<h1><span style={{letterSpacing:'5px', fontWeight:'400'}}>Bryan Schauerte</span></h1>
<h3>A Software Engineer</h3>
<p><span style={{textDecoration:'', letterSpacing:'3px'}}>Mostly using <span style={{color:'#5ed5fb'}}>Reactjs</span> and <span style={{color:'#cc2c38'}}>Angular</span> to put cats on the Internets.</span></p>
<p><span style={{textDecoration:'', letterSpacing:'3px'}}>Come inside and browse my recent blogs, demos and projects</span></p>

          </div>
    </div>)



}

export default Landing;
