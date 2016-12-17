import React,{Component, PropTypes} from 'react';
import * as uiActions from '../../actions/index';
import {connect} from 'react-redux';
import { Motion, StaggeredMotion, spring } from 'react-motion';


class Footer extends Component {

  constructor(props){
    super(props);

    this.hoverItem = this.hoverItem.bind(this);
    this.stopHoverItem = this.stopHoverItem.bind(this);
    this.showContact = this.showContact.bind(this);

  }
  showContact(){
    return this.props.dispatch(uiActions.showContact());
  }
  hoverItem(hoverID){
    event.preventDefault();
    const reset = 'footer reset';
     this.props.dispatch(uiActions.hoverChange('footer reset') );
    return this.props.dispatch(uiActions.hoverChange(hoverID));

  }
  stopHoverItem(){
    const hoverID = null;
    return this.props.dispatch(uiActions.hoverChange(hoverID) );
  }




  render(){

    return (<div
      onMouseLeave={this.stopHoverItem}
      style={
        {
          height:this.props.height,
          width: this.props.width}}
      id='footer'
      onClick={this.showContact}>


            <Motion
              style={
                {
                  fontSpace: spring(this.props.animations == 'footer'? window.innerWidth * .025 : 2),
                  r:spring(this.props.animations == 'footer'? 100:0)
                }}>

                {({ fontSpace, r}) =><div
                  className='footerContent'
                  style={this.props.catItemSelectedIndex!=null ||this.props.previewItem != null?{
                    position:'absolute',
                    width:"50%",
                    top:0,
                    right:0,
                    height:'7%'}:null}>
                  <h4

                      onClick={this.showContact}
                      onMouseEnter={this.hoverItem.bind(null, 'footer')}

                      style={{
                        position:'absolute',
                        textAlign:'center',
                      color: this.props.animations == 'footer'? uiActions.getColorCategory(this.props.categorySelected, "special"):'#e5e5e5',
                      letterSpacing: `${fontSpace}px`
                    }}>CONTACT</h4>
                        <svg
                          onMouseLeave={this.stopHoverItem}
                          onClick={this.showContact}
                          key ={Math.random()}
                           height="100%" width="100%">
                          <circle key ={Math.random()} cx='50%' cy='50%' r={r+'%'} fillOpacity='.5' fill={'#000'} />
                        </svg>




                    </div>



              }

              </Motion>
</div>)
      }


}

const mapStateToProps = (state)=>{

  return{

    categories: state.uIState.uiStructure.categories,
    categorySelected: state.uIState.uiStructure.categorySelected,
    catItemSelectedIndex: state.uIState.uiStructure.catItemSelectedIndex,
    previewItem: state.uIState.uiStructure.previewItem,
    dataBaseContents:state.uIState.uiStructure.dataBaseContents,
    mainContentIndex:state.uIState.uiStructure.mainContentIndex,
    animations: state.uIState.uiStructure.animations.hover
  }
}

const mapDispatchToProps = (dispatch)=>{

  return{
    dispatch
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer)
