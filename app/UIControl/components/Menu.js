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
    this.getCategories = this.getCategories.bind(this);
    this.getCategoryItems = this.getCategoryItems.bind(this);
    this.previewItem = this.previewItem.bind(this);
    this.selectContentItem = this.selectContentItem.bind(this);

  }
  previewItem(i){

    this.props.dispatch(uiActions.previewItem(i));//changes preview index
  }
  selectContentItem(){
    const itemIndex = this.props.previewIndex;
    this.props.dispatch(uiActions.selectContentItem(itemIndex)); //changes the catItemSelectedIndex
  }

  getCategories(){


     const keys = Object.keys(this.props.items);
     let toShow = keys.map((item, index)=>{
       if(this.props.items[item].length>0){
         return this.props.categories[index];
       }
    })
    const categoriesOb = {categories:toShow, keys:keys};
     return categoriesOb;


  }
    getCategoryItems(){
      if(this.props.categorySelected){
        const keys = Object.keys(this.props.items);
        return this.props.items[keys[this.props.categorySelected]]
      }
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
    //gets the items from the state and brings it to ui
    selectCategory(catIndex, keyName){
      this.props.dispatch(uiActions.changeStageIndex(1))
      this.props.dispatch(uiActions.categorySelect(null))
      this.props.dispatch(uiActions.selectContentItem(null))
      this.props.dispatch(uiActions.previewItem(0))
      if(this.props.items[keyName]){
          this.props.dispatch(uiActions.changeCategoryItems(this.props.items[keyName]))
      }
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
    const categoriesOb = this.getCategories();

    const{
      changeCategory,
      categorySelected,
      stageIndex,
      animations} = this.props;

    return(
      <div id ='menu' className='menuContain'>
        <Motion

          style={{
            x: spring(categorySelected !=null ? 100 : 0, {stiffness: 380, damping: 20}),
            o: spring(categorySelected !=null ? 0.7:1, {stiffness: 480, damping: 20})
          }}>
                {({x, o}) =>

                <div className= "menuInnerContain">
                    <div style={{
                      width:'100%',
                      height:x+'%',
                      position: 'absolute',
                      opacity:'.5',
                      background: `${'linear-gradient('+uiActions.getColorCategory(categorySelected)+','+uiActions.getColorCategory(categorySelected, 'false')+')' }`,
                      backgroundColor:uiActions.getColorCategory(categorySelected)
                    }} ></div>

                    <div className="menuBar"
                      style={{
                        '-webkit-transform': this.props.stageIndex==0 ?'translate3d(0, 200px, 0)':'',
                        '-ms-transform': this.props.stageIndex==0 ?'translate3d(0, 200px, 0)':'',
                        transform:this.props.stageIndex==0 ?'translate3d(0, 200px, 0)':''  }}>

                      {categoriesOb.categories.map((item, index)=>{
                        if(item){
                          return <div
                                    className='menuItemContain'

                                    style={{
                                      color:animations =='menu'+index && categorySelected!=index? uiActions.getColorCategory(index):'',
                                      opacity: categorySelected!=index? o:1,//4px 3px 0px #fff, 9px 8px 0px rgba(0,0,0,0.15)
                                      borderBottom: categorySelected==index? '2px solid #fff':'',
                                      }}
                                      key={item+index}
                                      onClick={()=>this.selectCategory(index, categoriesOb.keys[index])}>

                            <h3
                              className='menuText'
                              onMouseLeave={this.hoverItem.bind( null, 'menu end')}
                              onMouseEnter={this.hoverItem.bind( null, 'menu'+index)}
                              >
                              {categoriesOb.categories[index].toUpperCase()}
                            </h3>
                          </div>
                        }
                      }
                    )}

                    </div>

                    {
                      this.props.stageIndex !=0 &&
                      this.props.categorySelected != null ?(
                        <SplitView
                          displayItems={this.getCategoryItems()}
                          {...this.props}
                          previewHandler={this.previewItem}//index
                          selectContentItem={this.selectContentItem}
                        />
                      ): null
                    }
                  </div>

                  }
              </Motion>

      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  console.log(state, 'menu state')
  return{

    items:{
      aboutItems: state.siteInfo.aboutItems,
      blogItems: state.siteInfo.blogItems,
      demoItems: state.siteInfo.demoItems,
      projectItems: state.siteInfo.projectItems,
      otherItems: state.siteInfo.otherItems,
      allItems: state.siteInfo.allItems
    },
    hasGottenData: state.siteInfo.receivedData,
    hasError: state.siteInfo.error,
    animations: state.uIState.uiStructure.animations.hover,
    stageIndex: state.uIState.uiStructure.stageIndex,
    categories: state.uIState.uiStructure.categories,
    categorySelected: state.uIState.uiStructure.categorySelected,
    catItemSelectedIndex: state.uIState.uiStructure.catItemSelectedIndex,
    previewIndex: state.uIState.uiStructure.previewIndex,

    mainContentIndex:state.uIState.uiStructure.mainContentIndex,
    showContact:state.uIState.uiStructure.showContact,
    itemsForView: state.uIState.uiStructure.itemsForView
  }
}

const mapDispatchToProps = (dispatch)=>{

  return{
    dispatch
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
