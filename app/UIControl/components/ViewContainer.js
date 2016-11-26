import React,{Component} from 'react';
import {connect} from 'react-redux';

import * as uiActions from '../actions/index';

import Navigation from './Navigation';
import Landing from './presentation/Landing';
import SplitView from './SplitView';
import Reset from './presentation/Reset';
import CatalogDisplay from './presentation/CatalogDisplay';

class ViewContainer extends Component{
  constructor(props){
    super(props);

    this.showView = this.showView.bind(this);
    this.resetAnim = this.resetAnim.bind(this);
    this.delayDispatch = this.delayDispatch.bind(this);

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

  showView(){
    if(this.props.stageIndex == 0) {
          return <CatalogDisplay uiActions ={uiActions} delayDispatch={this.delayDispatch} {...this.props}/>
    }else{
        return <SplitView delayDispatch={this.delayDispatch} {...this.props}/>
    }


  }
  render(){

    return(
        <div style={{
        position:'absolute',
        display:'flex',
        alignSelf: 'center',
        height:"95%",
        width:"99%",
        margin: '0 .5%'}}>
        <div style={{

        display:'flex',
        flexDirection:'column',
        height:"95%",
        width:"99%"}}>
          <div style={{display:'flex', height:"9%", marginBottom:'2%'}}>
            <Navigation
              uiActions= {uiActions}
              delayDispatch={this.delayDispatch}
              {...this.props}/>
          </div>
          <div style={{display:'flex',height:"89%"}}>
              {this.showView()}
          </div>
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
    animations: state.uIState.uiStructure.animations,
    menuOpen: state.uIState.uiStructure.menuOpen,
    hoveringID: state.uIState.uiStructure.animations.hover
  }
}

const mapDispatchToProps = (dispatch)=>{

  return{
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewContainer)
