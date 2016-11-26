import React, {Component} from 'react';
import HorizPreView from '../../horizontalProductView/App'
import * as uiActions from '../actions/index';
import { Motion, StaggeredMotion, spring } from 'react-motion';



class SplitView extends Component{
  constructor(props){
    super(props);
  }



  render(){

    const{
      changeCategory,
      categories,
      categorySelected,
      stageIndex,
      animationToReset} = this.props;

    return(<Motion
      style={{
        x: spring(categorySelected !=null ? 100 : 0, {stiffness: 480, damping: 20})
      }}>
            {({x}) =>

            <div
              style={{
                display:'flex',
                flex:1,
                flexDirection:'column',
                height:'100%',
                width:'100%',
              position:"relative"}}>
                <div style={{
                  width:'100%',
                  height:x+'%',
                  position: 'absolute',
                  opacity:'.5',
                  backgroundColor: uiActions.getColorCategory(categorySelected)
                }} ></div>

                <div
                  style={{
                    position:'relative',
                    display:'flex',
                    flexDirection:'row',
                    height:x+'%',
                    overflow:'hidden',
                    flex:'1'}}>

                    <div style={{display:'flex', flexGrow:1,flexDirection:'column'}}>

                    </div>

                    <div style={{
                      backgroundColor:'black',
                      height:"100%",
                      width:".5%",
                      marginRight:'5%',
                      marginLeft:'5%',
                      display:'flex'}}></div>

                  <div style={{display:'flex', flexGrow:1}}>
                    <div style={{
                      display:'flex',
                      flexDirection:'column',
                      color:'#fff',
                      width:'100%',
                      textAlign:'center'}}>
                      <h1 style={{textAlign:'center', width:'100%'}}>
                        {categorySelected? categories[categorySelected].toUpperCase():null}
                      </h1>
                    </div>
                  </div>

                </div>
              </div>
              }
          </Motion>
      )
  }
}
export default SplitView
