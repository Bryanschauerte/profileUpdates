import React,{Component, PropTypes} from 'react';



const Landing = ({handleClick})=>{


        return (<div

          style={{
          display:'flex',
          justifyContent:'center',
          width:'100%',
          height:'100%',
          flexDirection:'column',
          border:'1px solid black'
        }}>
          <div
            onClick={()=>handleClick()}>
            hey
          </div>
    </div>)



}

export default Landing;
