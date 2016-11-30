import React, {Component} from 'react';
import { Motion, StaggeredMotion, spring, TransitionMotion } from 'react-motion';
import * as uiActions from '../actions/index';
import Options from './presentation/Options';

import SplitView from './SplitView';

class Menu extends Component{
  constructor(props){
    super(props);
    this.willEnter=this.willEnter.bind(this);
    this.willLeave=this.willLeave.bind(this);
    this.getDefaultStyles = this.getDefaultStyles.bind(this);
    this.getStyles =this.getStyles.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
    this.selectStageIndex = this.selectStageIndex.bind(this);

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
      this.props.dispatch(uiActions.categorySelect(null))
      this.props.dispatch(uiActions.changeStageIndex(null))
      this.props.dispatch(uiActions.selectContentItem(null))
      this.props.dispatch(uiActions.previewItem(0))

      setTimeout(
        () => {
          return this.props.dispatch(uiActions.categorySelect(catIndex))
        }, 400);

    }

    selectStageIndex(stage){
      console.log(stage, "stage")
      this.props.dispatch(uiActions.changeStageIndex(stage))
    }

    willEnter() {
    return {
      height: 0,
      opacity: 1,
    };
  }

    willLeave() {
      return {
        height: spring(0),
        opacity: spring(0),
      };
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
    console.log('rerendered')
    const{
      changeCategory,
      categories,
      categorySelected,
      stageIndex,
      animationToReset} = this.props;

    return(
      <div style={{display:'flex', flexDirection:'column'}}>
        <Motion
          style={{
            x: spring(categorySelected !=null ? 100 : 0, {stiffness: 480, damping: 20}),
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
                        fontWeight:'200'}}>

                      {categories.map((item, index)=>{
                        return <div
                                  style={{
                                    display:'flex',
                                    cursor:'pointer',
                                    flex:'1',
                                    justifyContent:'space-around',
                                    opacity: categorySelected!=index? o:null,
                                    borderBottom: categorySelected==index? '2px solid #fff':'',
                                    position:'relative'}}
                                    key={item+index}
                                    onClick={this.selectCategory.bind(null, index)}>

                          <h3 style={{letterSpacing:"5px"}}>
                            {categories[index].toUpperCase()}
                          </h3>
                        </div>
                      })}

                    </div>

                    {this.props.stageIndex !=0 ?(<SplitView {...this.props}/>): null}
                  </div>

                  }
              </Motion>

      </div>
    )
  }
}

export default Menu;
