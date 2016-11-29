import React from 'react';

const GallerySubText = ({_handleClick, previewIndex, contentsArray}) => {
  console.log(previewIndex, "previewIndex")
  return(
<div style={{

display:'flex',
flex:'1',
justifyContent:'space-between',
alignItems:'center',
flexDirection:'column'
}}>
        <h3 style={{
          width:'100%',
          textAlign: 'center',
        letterSpacing:'3px'}}>
          {contentsArray[previewIndex].previewContents.previewTitle}
        </h3>


        <p>{contentsArray[previewIndex].previewContents.previewHeader}</p>

        <ul style={{
          opacity:1,
          display:'flex',
          flex:'1',
          flexDirection:'column',
          justifyContent:'space-around',
          listStyle:'none'

        }}>
        <li style={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          color:'#fff',
          fontWeight:'700',
          letterSpacing:'4px'
        }}>Sections:</li>
          {contentsArray[previewIndex].main.map((item,index)=>{
            return <li


              style={{


                backgroundColor:'#333',
                borderRadius:'3px',
                fontSize:'1.2rem',
                padding:'.05rem 1.75rem',
                letterSpacing:'3px',
                color:'#fff',
                fontWeight:'200',
                marginBottom:"3px"
              }}
              key={item+index}> {item.subHeader || item.subheader}</li>
          })}
        </ul>

        <p>{contentsArray[previewIndex].previewContents.previewFooter}</p>

      <input
        style={{
          boxShadow:'inset 0 0 0 1px #707070',
          border:'solid 5px #c9c9c9',
          backgroundColor:'#fff',

        borderRadius:'3px',
        fontSize:'1.2rem',

        padding:'.05rem 1.75rem'}}
        onClick={()=>_handleClick(previewIndex)}
        type='button'
        value='Take A Look'/>
          </div>)
}
export default GallerySubText;
