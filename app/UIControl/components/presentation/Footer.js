import React,{Component, PropTypes} from 'react';
import DisplaySingleItem from './DisplaySingleItem';

class Footer extends Component {


  constructor(props){
    super(props);

    this.hoverItem = this.hoverItem.bind(this);
    this.stopHoverItem = this.stopHoverItem.bind(this);

  }

      hoverItem(hoverID){
        event.preventDefault();
        const reset = null;
         this.props.dispatch(this.props.uiActions.hoverChange(reset) );
        return this.props.dispatch(this.props.uiActions.hoverChange(hoverID));

      }
      stopHoverItem(){
        const hoverID = null;
        return this.props.dispatch(this.props.uiActions.hoverChange(hoverID) );
      }




      render(){

        return (<div
          style={{position:'relative',bottom:'0%'}}><ul style={{
          opacity:1,
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-between',
          listStyle:'none'
        }}>
         <li
              onClick={()=>handleClick()}
              style={{
                opacity:1,
                color:'white',
                display:'flex',
                justifyContent:'center',
                flex:'1',
                position:'relative',
                border: '1px solid black',
                letterSpacing:'3px',
                color:'#fff',
                fontWeight:'200',
                width:'20%'
              }}>
              <DisplaySingleItem activeHover={this.props.hoveringID == 'Footer'} handleMouseEnter={this.hoverItem.bind(this, 'Footer')} handleMouseLeave={this.stopHoverItem} fillColor={this.props.uiActions.getColorCategory(this.props.categorySelected)} displayItem={'CONTACT'}/></li>

      </ul></div>)
      }


}

export default Footer;
