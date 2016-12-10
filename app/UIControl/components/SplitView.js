import React, {Component} from 'react';
import * as uiActions from '../actions/index';
import { Motion, StaggeredMotion, spring } from 'react-motion';
import DetailsPage from './presentation/DetailsPage';
// import GallerySubText from './presentation/GallerySubText';
import ContentGallery from './ContentGallery';
import WildCard from './presentation/WildCard.js';

class SplitView extends Component{
  constructor(props){
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState){

    if(nextProps.previewIndex != this.props.previewIndex){
      return true;
    }
    if(nextProps.catItemSelectedIndex != this.props.catItemSelectedIndex){
      return true;
    }
    return false
  }
  render(){


    const{
      catItemSelectedIndex,
      previewHandler,
      selectContentItem,
      showContact,
      itemsForView,
      categorySelected
        } = this.props;

    return(<Motion
      key={Math.random()}
          style={{
            x: spring(categorySelected !=null ? 100 : 0, {stiffness: 480, damping: 20})
          }}>
                {({x}) =>



                    <div
                      key={Math.random()}
                      id='SplitView'
                      className="outer"
                      style={{height:x+'%', opacity:1, zIndex:2, display: showContact? 'none':'flex'}}>

                        {
                          catItemSelectedIndex==null ?
                          <ContentGallery
                            previewHandler={previewHandler}
                            selectContentItem={selectContentItem}
                            itemsForView={itemsForView}
                            previewIndex={this.props.previewIndex}
                          />

                            :  <div className="wildcardContainer"  key={Math.random()}>
                              <h1 className='wildcardTitle'>{itemsForView[catItemSelectedIndex].contentItems.title}</h1>
                                  {
                                    itemsForView[catItemSelectedIndex].contentItems.main.map((item, index)=>{

                                      return<div>
                                       <WildCard contents={item} key ={item._id} {...this.props}/>
                                    </div>
                                  })
                                }
                              </div>
                          }




                    </div>

                  }
              </Motion>

      )
  }
}


export default SplitView
