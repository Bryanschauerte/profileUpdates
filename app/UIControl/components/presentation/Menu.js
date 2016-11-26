import React from 'react';

const Menu = ({categories})=>{
  return(
    <div style={{display:'flex', flexDirection:'column', height:"100%"}}>
      <h1>view Left</h1>
        {categories.map(
        (cat, index)=><div
          onClick={()=>changeCategory(index)}
          style={{
            backgroundColor:'#fff',
            display:'flex',
            flexDirection:'row',
            flex:'1',
            fontSize:"3em"
          }}
          key={Math.random()}>

          {cat}

        </div>
      )}
    </div>
  )
}
export default Menu;
