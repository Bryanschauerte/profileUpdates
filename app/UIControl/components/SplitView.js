import React, {Component} from 'react';
import * as uiActions from '../actions/index';
import { Motion, StaggeredMotion, spring } from 'react-motion';
import DisplayContain from './presentation/DisplayContain';
import GallerySubText from './presentation/GallerySubText';
import ContentGallery from './ContentGallery';

class SplitView extends Component{
  constructor(props){
    super(props);
    this.previewGalleryItem = this.previewGalleryItem.bind(this);
    this.selectItemToView = this.selectItemToView.bind(this);

  }


  previewGalleryItem(i){

    this.props.dispatch(uiActions.previewItem(i));
  }
  selectItemToView(i){

    this.props.dispatch(uiActions.selectContentItem(i));
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
                        position:'relative',
                        display:'flex',
                        flexDirection:'row',
                        height:x+'%',

                        flex:'1'}}>

                        {this.props.itemIndexSelected==null  && this.props.categorySelected != null?
                          <ContentGallery
                            _handleClick={this.previewGalleryItem}
                            activeIndex={this.props.previewIndex}
                            contentsArray={this.props.dataBaseContents}>

                              <GallerySubText
                                _handleClick={this.selectItemToView}
                                previewIndex={this.props.previewIndex}
                                contentsArray={this.props.dataBaseContents}

                              />


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

                  }
              </Motion>

      )
  }
}


export default SplitView
