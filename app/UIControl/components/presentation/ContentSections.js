import React,{PropTypes} from 'react';



const ContentSections = ({dataBaseContents, handleClick, mainContentIndex, itemPreviewIndex}) => {
console.log(dataBaseContents, 'cs')
  return (<ul id ='contentSections' >
  <li className='header'>Sections:</li>
    {dataBaseContents[itemPreviewIndex].main.map((item,index)=>{
      return <li className='item' key={item+index}>
        {item.subHeader || item.subheader}
      </li>
      
    })}
</ul>)

}


ContentSections.propTypes = {

  handleClick: PropTypes.func
}
export default ContentSections;
