import React, {Component} from 'react';
import * as uiActions from '../actions/index';
import { Motion, StaggeredMotion, spring } from 'react-motion';
import DetailsPage from './presentation/DetailsPage';
// import GallerySubText from './presentation/GallerySubText';
import ContentGallery from './ContentGallery';
import Display from './presentation/Display.js';

class SplitView extends Component{
  constructor(props){
    super(props);
    // this.previewGalleryItem = this.previewGalleryItem.bind(this);
    // this.selectItemToView = this.selectItemToView.bind(this);

  }
  //
  //
  // previewGalleryItem(i){
  //
  //   this.props.dispatch(uiActions.previewItem(i));
  // }
  // selectItemToView(i){
  //
  //   this.props.dispatch(uiActions.selectContentItem(i));
  // }

  render(){


    const{
      itemsForView,
      changeCategory,
      categories,
      categorySelected,
      stageIndex} = this.props;

    return(<Motion
          style={{
            x: spring(categorySelected !=null ? 100 : 0, {stiffness: 480, damping: 20})
          }}>
                {({x}) =>



                    <div id='SplitView' className="outer"
                      style={{height:x+'%'}}>

                        {
                          this.props.catItemSelectedIndex==null  && this.props.categorySelected != null?
                          <ContentGallery
                            previewHandler={this.props.previewHandler}
                            selectContentItem={this.props.selectContentItem}
                            viewItems={this.props.itemsForView}
                          {...this.props}/>

                            :null
                          }

                        {this.props.catItemSelectedIndex!=null?
                        <div className="displayContainer" >
                            {this.props.itemsForView[this.props.catItemSelectedIndex].contentItems.main.map((item, index)=>{
                              return<Display contents={item} key ={Math.random()} {...this.props}/> //<DetailsPage key ={Math.random()} contents={item} {...this.props}/>
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
