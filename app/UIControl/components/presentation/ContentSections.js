import React,{PropTypes} from 'react';



const ContentSections = ({dataBaseContents, handleClick, mainContentIndex, itemPreviewIndex}) => {
console.log(dataBaseContents, 'cs')
  return (<ul style={{
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
    {dataBaseContents[itemPreviewIndex].main.map((item,index)=>{
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
</ul>)

}


ContentSections.propTypes = {

  handleClick: PropTypes.func
}
export default ContentSections;
