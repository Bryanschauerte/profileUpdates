import React,{Component, PropTypes} from 'react';
import DisplaySingleItem from './DisplaySingleItem';
import * as uiActions from '../../actions/index';
import {connect} from 'react-redux';
import { Motion, StaggeredMotion, spring } from 'react-motion';


class ContactDisplay extends Component {


  constructor(props){
    super(props);

    this.hoverItem = this.hoverItem.bind(this);
    this.stopHoverItem = this.stopHoverItem.bind(this);
    this.hideContact = this.hideContact.bind(this);
  }
      hideContact(){
        return this.props.dispatch(uiActions.hideContact());
      }
      hoverItem(hoverID){
        event.preventDefault();
        const reset = null;
         this.props.dispatch(uiActions.hoverChange(reset) );
        return this.props.dispatch(uiActions.hoverChange(hoverID));

      }
      stopHoverItem(){
        const hoverID = null;
        return this.props.dispatch(uiActions.hoverChange(hoverID) );
      }




      render(){
console.log('ding')
        return (<div style={{
          height:'100%',
          width:'100%',
          position:'absolute'}}>
          <div
            style={{
              height:'100%',
            width:'100%',
            position:'absolute',
            backgroundColor:'#000',
            opacity:'.6'}}></div>
          <div
                    onMouseLeave={this.stopHoverItem}
                    style={{
                    display:'flex',
                    justifyContent:'center',
                    width:'100%',
                    height:'20%',
                    flexDirection:'column',
                    position:'relative'
                  }}>
                    <div
                      style={{
                                    opacity:1,
                                    listStyle:'none',
                                    margin:'0',
                                    padding:'0'

                                  }}>


                          <Motion
                            defaultStyle={{
                              b:0,
                              r:0
                              }}
                            style={{

                            b: spring(this.props.animations == 'contactMe'?  2 : 0),
                            r:spring(this.props.animations == 'contactMe'? 100:0)


                          }}>



                                  {({ b, r}) =><div style={{

                                    display:"flex",
                                    flexDirection:'row',
                                    flex:1,
                                    justifyContent:'center'

                                  }} >
                                  <div
                                    style={{
                                      color:'#eee',
                                      height:'10%',
                                      display:"flex",
                                      backgroundColor:'#000'}}
                                    onClick={()=>this.hideContact()}
                                    >
                                    <h1>close</h1>
                                  </div>
                                  <div
                                    onMouseEnter={this.hoverItem.bind(null, 'contactMe')}
                                    onMouseLeave={this.stopHoverItem}
                                    style={{
                                    opacity:'1',
                                    color: this.props.animations == 'contactMe'? uiActions.getColorCategory(this.props.categorySelected):'#e5e5e5',
                                    margin:'0',
                                    alignSelf:'center',
                                    width:'30%',
                                    height:'100%',
                                    display:'flex',
                                    justifyContent:'center',
                                    position:'relative'
                                  }}>

                            <h1>test</h1>

                                </div>


                                </div>
                              }
                            </Motion>



                </div>
              </div>
            </div>)
      }


}

const mapStateToProps = (state)=>{

  return{


    animations: state.uIState.uiStructure.animations.hover
  }
}

const mapDispatchToProps = (dispatch)=>{

  return{
    dispatch
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactDisplay)
