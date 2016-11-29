import React, {Component} from 'react';
import HorizPreView from '../../horizontalProductView/App'
import * as uiActions from '../actions/index';
import { Motion, StaggeredMotion, spring } from 'react-motion';
import Options from './presentation/Options';
import DisplayContain from './presentation/DisplayContain';

import GallerySubText from './presentation/GallerySubText';
import ContentGallery from './ContentGallery';

class SplitView extends Component{
  constructor(props){
    super(props);
    this.previewGalleryItem = this.previewGalleryItem.bind(this);
    this.selectItemToView = this.selectItemToView.bind(this);
    this.selectMainContentIndex = this.selectMainContentIndex.bind(this);
  }

  selectMainContentIndex(i){
    this.props.dispatch(uiActions.selectMain(i));
  }
  previewGalleryItem(i){

    this.props.dispatch(uiActions.previewItem(i));
  }
  selectItemToView(i){

    this.props.dispatch(uiActions.selectContentItem(i));
  }

  render(){
    console.log(this.props, "split props")

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

                        flex:'1'}}>

                        {this.props.itemIndexSelected==null?
                          <ContentGallery
                            _handleClick={this.previewGalleryItem}
                            activeIndex={this.props.previewIndex}
                            contentsArray={this.props.dataBaseContents}>
                            <div>
                              <GallerySubText
                                _handleClick={this.selectItemToView}
                                previewIndex={this.props.previewIndex}
                                contentsArray={this.props.dataBaseContents}

                              />

                              </div>
                            </ContentGallery>
                            :null}

                        {this.props.itemIndexSelected!=null?
                        <div style={{display:'flex', flexGrow:1,flexDirection:'column'}}>



                            {this.props.dataBaseContents[this.props.itemIndexSelected].main.map((item, index)=>{
                              return <DisplayContain key ={Math.random()}
                                contents={item} {...this.props}/>
                            })
                          }
                        </div>:null}





                    </div>
                  </div>
                  }
              </Motion>

      )
  }
}


export default SplitView
