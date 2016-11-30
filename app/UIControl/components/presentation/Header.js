import React, {Component} from 'react';
import * as uiActions from '../../actions/index';
import {connect} from 'react-redux';
import { Motion, StaggeredMotion, spring } from 'react-motion';



class Header extends Component {


  constructor(props){
    super(props);

    this.hoverItem = this.hoverItem.bind(this);
    this.stopHoverItem = this.stopHoverItem.bind(this);


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

        return (<div
          onMouseLeave={this.stopHoverItem}
          style={{
          display:'flex',
          width:'100%',
          height:'7%',
          flexDirection:'row'
        }}>
        <div>
          <Motion
            defaultStyle={{
              fontSpace:4
              }}
            style={{
              fontSpace:spring(this.props.animations == 'header'? window.innerWidth * .025 : 4)


          }}>



                  {({ fontSpace }) =><div style={{

                    display:"flex",
                    flexDirection:'row',
                    flex:1,
                    justifyContent:'flex-start'

                  }} >

                    <div
                      onMouseLeave={this.stopHoverItem}
                      style={{
                        display:'flex',
                        letterSpacing:fontSpace+'px',
                        color:'#e5e5e5',
                        height:'7%'
                        }}>
                        <h1
                          onMouseLeave={this.stopHoverItem}
                          onMouseEnter={this.hoverItem.bind(null, 'header')}

                          style={{
                            margin:0
                          }}>Bryan Schauerte</h1></div>


                </div>
              }
            </Motion>
          </div>
        </div>
      )
      }


}

const mapStateToProps = (state)=>{

  return{

    categories: state.uIState.uiStructure.categories,
    categorySelected: state.uIState.uiStructure.categorySelected,
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
export default connect(mapStateToProps, mapDispatchToProps)(Header)
