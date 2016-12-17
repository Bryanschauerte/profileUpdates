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
    return this.props.dispatch(uiActions.hoverChange(hoverID));

  }
  stopHoverItem(){
    const hoverID = 'header stop';
    return this.props.dispatch(uiActions.hoverChange(hoverID) );
  }




  render(){

    return (
      <div  style={{height:this.props.height}}>
        <div id ='Header'>

          <Motion
            defaultStyle={{
              fontSpace:4
              }}
            style={{
              fontSpace:spring(this.props.animations == 'header'? window.innerWidth * .025 : 4)
            }}>

              {({ fontSpace }) =><div className='container' >
                    <div
                      className="textContain"
                      style={{
                        cursor:'pointer',
                        letterSpacing:fontSpace+'px'
                        }}>

                        <h1
                          onClick={()=>this.props.dispatch(uiActions.showContact())}
                          onMouseLeave={this.stopHoverItem}
                          onMouseEnter={this.hoverItem.bind(null, 'header')}>

                            Bryan Schauerte

                          </h1>
                        </div>
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
