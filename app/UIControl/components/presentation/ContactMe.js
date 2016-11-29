import React,{PropTypes} from 'react';


const ContactMe = ({types, handleClick}) => {

  return (<ul style={{
    opacity:1,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    listStyle:'none'
  }}>
    {types.map((item,index)=>{
      return <li
        onClick={()=>handleClick(index)}
        style={{
          opacity:1,
          color:'white',
          display:'flex',
          justifyContent:'center',
          flex:'1',
          position:'relative',
          borderRight: types.length-1> index? '1px solid black':'',
          letterSpacing:'3px',
          color:'#fff',
          fontWeight:'200'
        }}
        key={item+index}> {item}</li>
    })}
</ul>)

}
ContactMe.defaultProps={
  types:['node', 'react', 'angular', 'es6', 'redux']
}

ContactMe.propTypes = {
  types: PropTypes.array,
  handleClick: PropTypes.func
}
export default ContactMe;
