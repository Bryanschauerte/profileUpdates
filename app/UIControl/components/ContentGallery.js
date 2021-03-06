import React, {Component, PropTypes} from 'react';
import { StaggeredMotion, spring } from 'react-motion';


import prefixAll from 'inline-style-prefixer/static';

class ContentGallery extends Component {
  constructor(props){
    super(props);
  }

    render(){

      const {
        startY,
        startX,
        startOpacity,
        scaleHeight,
        scaleHeightFinal,
        initialStiffness,
        initialDamping,
        finalStiffness,
        finalDamping

      } = this.props;

      const defaultStyleObj = { x: startX, y: startY, o: 1, f:1, s: scaleHeight }
      const specialStyleObj = { x: startX, y: startY, o: 1, f:3, s: scaleHeightFinal}
      let description = null;

      const itemStyleArr = this.props.itemsForView.map( (item, index) =>  {
        if(item.contentItems.isDescription){
          description = item;
        }
            return index == this.props.previewIndex?  specialStyleObj: defaultStyleObj


      })

      return (
        <div
          id='galleryMainContain'
          className="outerContainer">

      {
        description? <div className="contentHeader">
                                    <h3>{description.contentItems.title}</h3>
                                    <p>{description.contentItems.description}</p>
                                    <p>{description.contentItems.footer}</p>
                                  </div>:null
      }
        <div
        key={Math.random()}
        className='outterWrapperStyles'>
          <StaggeredMotion
            key={Math.random()}
            defaultStyles={itemStyleArr}
            styles={
              prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {

              if(i == this.props.previewIndex){

                return {
                  y: spring(0, { stiffness: initialStiffness, damping: initialDamping }),
                  o: spring(1),
                  f: spring(3),
                  s: spring(1)
                }
              }else{

              return  {
                  y: spring(0, { stiffness: initialStiffness, damping: initialDamping }),
                  o: spring(.5,{ stiffness: initialStiffness, damping: initialDamping }),
                  f: spring(1,{ stiffness: initialStiffness, damping: initialDamping }),
                  s: spring(scaleHeightFinal)
                }
                // : {
                //     y: spring(prevInterpolatedStyles[i - 1].y, { stiffness: finalStiffness, damping: finalDamping }),
                //     o: spring(.5,{ stiffness: finalStiffness, damping: finalDamping }),
                //     f: spring(1),
                //     s: spring(scaleHeightFinal,{ stiffness: finalStiffness, damping: finalDamping })
                //   };
                }
            })}>

            {interpolatingStyles =>
              <div className='innerWrapperStyles'>

                {interpolatingStyles.map((style, i) => {

                  const productStyles = {

                    // order: i == previewIndex? -1: i,
                    WebkitTransform: `translate3d(0, ${style.y}px, 0) scale(${style.s})`,
                    opacity: style.o,
                    flexGrow:style.f
                  }

                  if(!this.props.itemsForView[i].contentItems.isDescription){


                      return <div
                                className='itemStyle'
                                onClick={i!=this.props.previewIndex?()=>this.props.previewHandler(i):()=>this.props.selectContentItem(this.props.previewIndex)}
                                key={this.props.itemsForView[i].contentItems.previewContents.previewTitle+ Math.random()}
                                style={productStyles}>

                                <h1>{this.props.itemsForView[i].contentItems.previewContents.previewTitle}</h1>
                                  <div

                                    style={{
                                      backgroundImage:'url('+this.props.itemsForView[i].contentItems.previewContents.imageArrayPreview+ ')',
                                      height:(isNaN(window.innerHeight) ? window.clientHeight : window.innerHeight)/4.5 +'px',
                                      width: "100%",
                                      backgroundRepeat: 'no-repeat',
                                      backgroundSize:'contain',
                                      backgroundPosition: 'center center'
                                    }}>

                                  </div>
                                { this.props.previewIndex==i? <div style={{
                                  display:'flex',
                                  color:'#fff',
                                  flexDirection:'column',
                                  flex:'1'


                                }}>

                                <div id='GallerySubText' >

            <p>{this.props.itemsForView[this.props.previewIndex].contentItems.previewContents.previewHeader}</p>

            <ul>
            <li className='header'>Contents:</li>
              {this.props.itemsForView[this.props.previewIndex].contentItems.main.map((item,index)=>{
              if(item.subHeader || item.subheader){  return <li className='galleryItem'
                  key={item+index}> {item.subHeader || item.subheader}</li>}
              })}
            </ul>


          <input
            onClick={()=>this.props.selectContentItem(this.props.previewIndex)}
            type='button'
            value='Take A Look'
            style={{cursor:'pointer'}}/>
              </div>


                                  </div>:null}
                                </div>
                              }

                    })}
              </div>
            }
          </StaggeredMotion>
        </div>
      </div>)
    }



  }
  ContentGallery.propTypes={
    itemsForView:PropTypes.array
  }
  ContentGallery.defaultProps= {
    startY:1,
    startOpacity:1,
    scaleHeight:1,
    scaleHeightFinal:.7,
    initialStiffness:70,
    initialDamping:16,
    finalStiffness:100,
    finalDamping:10

  }

export default ContentGallery;
