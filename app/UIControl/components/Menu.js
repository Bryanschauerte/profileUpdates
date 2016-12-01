import React, {Component} from 'react';
import { Motion, StaggeredMotion, spring, TransitionMotion } from 'react-motion';
import * as uiActions from '../actions/index';

import {connect} from 'react-redux';
import SplitView from './SplitView';

class Menu extends Component{
  constructor(props){
    super(props);
    this.getDefaultStyles = this.getDefaultStyles.bind(this);
    this.getStyles =this.getStyles.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
    this.selectStageIndex = this.selectStageIndex.bind(this);
    this.hoverItem = this.hoverItem.bind(this);
    this.stopHoverItem = this.stopHoverItem.bind(this);

  }
    hoverItem(hoverID){
      event.preventDefault();
      return this.props.dispatch(uiActions.hoverChange(hoverID));
    }
    stopHoverItem(){
      const hoverID = null;
      return this.props.dispatch(uiActions.hoverChange(hoverID) );
    }
    getDefaultStyles(){
      return this.props.categories.map(item=>{
        return {
          style:{
            height: 0, opacity: 1
          },
          key:item + Math.random()
          }
      });
    }
    selectCategory(catIndex){
      this.props.dispatch(uiActions.changeStageIndex(1))
      this.props.dispatch(uiActions.categorySelect(null))
      this.props.dispatch(uiActions.selectContentItem(null))
      this.props.dispatch(uiActions.previewItem(0))

      setTimeout(
        () => {
          return this.props.dispatch(uiActions.categorySelect(catIndex))
        }, 500);

    }

    selectStageIndex(stage){
      this.props.dispatch(uiActions.changeStageIndex(stage))
    }

    getStyles() {
       const {categories, categorySelected} = this.props;
       return categories.map((category, i) => {
         return {
           style:{
               height: spring(60),
               opacity: spring(1)
             },
           key:category+Math.random()

         };
       });
     }


  render(){

    const{
      changeCategory,
      categories,
      categorySelected,
      stageIndex,
      animations} = this.props;

    return(
      <div style={{display:'flex', flexDirection:'column'}}>
        <Motion

          style={{
            x: spring(categorySelected !=null ? 100 : 0, {stiffness: 380, damping: 20}),
            o: spring(categorySelected !=null ? 0.3:1, {stiffness: 480, damping: 20})
          }}>
                {({x, o}) =>

                <div
                  style={{
                    display:'flex',
                    flex:1,
                    flexDirection:'column',
                    position:"relative"
                  }}>
                    <div style={{
                      width:'100%',
                      height:x+'%',
                      position: 'absolute',
                      opacity:'.5',
                      background: `${'linear-gradient('+uiActions.getColorCategory(categorySelected)+','+uiActions.getColorCategory(categorySelected, 'false')+')' }`
                    }} ></div>

                    <div
                      style={{
                        position:'relative',
                        display:'flex',
                        flexDirection:'row',
                        alignContent: 'center',
                        flex:'1',
                        border:'1px solid #fff',
                        color:'#fff',
                        fontWeight:'200',

                      transform:this.props.stageIndex==0 ?'translate3d(0, 200px, 0)':'',
                      transition:'all 300ms ease-in-out'  }}>

                      {categories.map((item, index)=>{
                        return <div


                                  style={{
                                    display:'flex',
                                    flex:'1',
                                    color:animations =='menu'+index && categorySelected!=index? uiActions.getColorCategory(index):'',
                                    justifyContent:'space-around',
                                    opacity: categorySelected!=index? o:1,//4px 3px 0px #fff, 9px 8px 0px rgba(0,0,0,0.15)
                                    borderBottom: categorySelected==index? '2px solid #fff':'',
                                    position:'relative'}}
                                    key={item+index}
                                    onClick={this.selectCategory.bind(null, index)}>

                          <h3
                            onMouseLeave={this.hoverItem.bind( null, 'menu end')}
                            onMouseEnter={this.hoverItem.bind( null, 'menu'+index)}
                            style={{
                              letterSpacing:"5px",
                              textShadow:'0 1px 0 rgba(255, 255, 255, 0.4)',
                              cursor:'pointer'}}>
                            {categories[index].toUpperCase()}
                          </h3>
                        </div>
                      })}

                    </div>

                    {this.props.stageIndex !=0 && this.props.categorySelected != null ?(<SplitView {...this.props}/>): null}
                  </div>

                  }
              </Motion>

      </div>
    )
  }
}

const mapStateToProps = (state)=>{

  return{
    animations: state.uIState.uiStructure.animations.hover,
    stageIndex: state.uIState.uiStructure.stageIndex,
    categories: state.uIState.uiStructure.categories,
    categorySelected: state.uIState.uiStructure.categorySelected,
    itemIndexSelected: state.uIState.uiStructure.itemIndexSelected,
    previewIndex: state.uIState.uiStructure.previewIndex,
    dataBaseContents:state.uIState.uiStructure.dataBaseContents,
    mainContentIndex:state.uIState.uiStructure.mainContentIndex,
    showContact:state.uIState.uiStructure.showContact
  }
}

const mapDispatchToProps = (dispatch)=>{

  return{
    dispatch
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
