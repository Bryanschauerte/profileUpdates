import React from 'react';

import Display from './Display';


const DisplayContain = ({categories, categorySelected, contents})=>{
console.log(contents, "contents display contents")
  return (
    <div
      style={{
        display:'flex',
        flex:1,
        flexDirection:'row',
        height:'100%',
        position:'relative'}}>

        <div style={{
          display:'flex',
          flexDirection:'column',
          flex:1,
          backgroundColor:'white'

        }}>

          <div style={{
            display:'flex',
            flex:1,
            flexDirection:'column',
            border:'1px solid black',
            margin:'5%'
          }}>

          <Display key={Math.random()} contents={contents}/>
          </div>

        </div>




        <div style={{
          display:'flex',
          flex:1,
          backgroundColor:'black',
          opacity:.5,
          color:'#fff'

        }}>
          <div style={{
            display:'flex',
            flex:1,
            flexDirection:'column',
            border:'1px solid #fff',
            margin:'5%'

          }}>
          <Display key={Math.random()} contents={contents}/>


          </div>
        </div>

    </div>)
}

export default DisplayContain;
