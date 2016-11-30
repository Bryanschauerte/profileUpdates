import React,{Component} from 'react';
import {connect} from 'react-redux';

import * as uiActions from '../actions/index';
import Menu from './Menu';

class ViewContainer extends Component{
  constructor(props){
    super(props);


    this.resetAnim = this.resetAnim.bind(this);
    this.delayDispatch = this.delayDispatch.bind(this);
    this.handleFooterClick = this.delayDispatch.bind(this);

  }

  resetAnim(change){
    this.props.dispatch(uiActions.animationReset(change));


  }
  delayDispatch(action, payload, delayTime=300){
    setTimeout(
      () => {
        return this.props.dispatch(uiActions[action](payload));
      }, delayTime);

  }


  render(){

    return(
        <div style={{
        position:'absolute',
        display:'flex',
        alignSelf: 'center',
        height:"95%",
        width:"100%",
        justifyContent:'center'}}>
        <div style={{

        display:'flex',
        flexDirection:'column',
        height:"95%",
        width:"95%"}}>
          <div style={{display:'flex', height:"4%"}}>
            {/* <Navigation
              uiActions= {uiActions}
              delayDispatch={this.delayDispatch}
              {...this.props}/> */}
          </div>

            <Menu delayDispatch={this.delayDispatch} {...this.props}/>

            </div>

        </div>
    )
  }
}

const mapStateToProps = (state)=>{
  console.log('ViewContainerStat', state)
  return{
    stageIndex: state.uIState.uiStructure.stageIndex,
    categories: state.uIState.uiStructure.categories,
    categorySelected: state.uIState.uiStructure.categorySelected,
    menuOpen: state.uIState.uiStructure.menuOpen,
    itemIndexSelected: state.uIState.uiStructure.itemIndexSelected,
    previewIndex: state.uIState.uiStructure.previewIndex,
    dataBaseContents:state.uIState.uiStructure.dataBaseContents,
    mainContentIndex:state.uIState.uiStructure.mainContentIndex
  }
}

const mapDispatchToProps = (dispatch)=>{

  return{
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewContainer)
