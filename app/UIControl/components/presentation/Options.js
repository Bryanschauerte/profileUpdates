import React,{PropTypes} from 'react';


const Options = ({key, style, categories, handleClick}) => {

  return (<li
        key={key}
        style={style}
        onClick={handleClick}>
        {categories[index]}
      </li>)

}
Options.propTypes = {
  options: PropTypes.array,
  handleClick: PropTypes.func,
  defaultColor: PropTypes.string,
  selectedOption: PropTypes.number
}
export default Options;
