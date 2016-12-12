// import React,{PropTypes} from 'react';
//
//
// const ContactMe = ({types, handleClick}) => {
//
//   return (<ul id='contactMeBtn' >
//     {types.map((item,index)=>{
//       return <li
//         onClick={()=>handleClick(index)}
//         className=''
//         style={{
//           borderRight: types.length-1> index? '1px solid black':''
//         }}
//         key={item+index}> {item}</li>
//     })}
// </ul>)
//
// }
// ContactMe.defaultProps={
//   types:['node', 'react', 'angular', 'es6', 'redux']
// }
//
// ContactMe.propTypes = {
//   types: PropTypes.array,
//   handleClick: PropTypes.func
// }
// export default ContactMe;
