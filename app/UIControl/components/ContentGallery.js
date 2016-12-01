import React, {Component, PropTypes} from 'react';
import { StaggeredMotion, spring } from 'react-motion';
import GallerySubText from './presentation/GallerySubText';

class ContentGallery extends Component {

  shouldComponentUpdate(nextProps, nextState){
    if(nextProps.activeIndex != this.props.activeIndex){
      return true;
    }
    return false
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
        finalDamping,
        activeIndex

      } = this.props;


      const outterWrapperStyles = {

        display: 'flex',
        justifyContent: 'center',
        flexWrap:'wrap',
        flexFlow: 'row',
        flex:1,
        margin:'2% 0%'
      }

      const innerWrapperStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex:1
      }

      const defaultStyleObj = { x: startX, y: startY, o: 1, f:1, s: scaleHeight }
      const specialStyleObj = { x: startX, y: startY, o: 1, f:2, s: scaleHeightFinal}

      const itemStyleArr = this.props.contentsArray.map( (item, index) =>  {
        return index == this.props.activeIndex?  specialStyleObj: defaultStyleObj
      })

      return (
        <div
          style={{
            display:'flex',
            flex:1
          }}>
        <div
        key={Math.random()}
        style={outterWrapperStyles}>
          <StaggeredMotion
            key={Math.random()}
            defaultStyles={itemStyleArr}
            styles={
              prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {

              if(i == this.props.activeIndex){

                return {
                  y: spring(0, { stiffness: initialStiffness, damping: initialDamping }),
                  o: spring(1),
                  f: spring(2),
                  s: spring(1)
                }
              }else{

              return i === 0

                ? {
                  y: spring(0, { stiffness: initialStiffness, damping: initialDamping }),
                  o: spring(.5,{ stiffness: initialStiffness, damping: initialDamping }),
                  f: spring(1,{ stiffness: initialStiffness, damping: initialDamping }),
                  s: spring(scaleHeightFinal)
                }
                : {
                    y: spring(prevInterpolatedStyles[i - 1].y, { stiffness: finalStiffness, damping: finalDamping }),
                    o: spring(.5,{ stiffness: finalStiffness, damping: finalDamping }),
                    f: spring(1),
                    s: spring(scaleHeightFinal,{ stiffness: finalStiffness, damping: finalDamping })
                  };
                }
            })}>

            {interpolatingStyles =>
              <div style={innerWrapperStyles}>

                {interpolatingStyles.map((style, i) => {

                  const productStyles = {
                    display:'flex',
                    color:'#fff',
                    cursor:'pointer',
                    flex:1,
                    // order: i == activeIndex? -1: i,
                    WebkitTransform: `translate3d(0, ${style.y}px, 0) scale(${style.s})`,
                    opacity: style.o,
                    flexGrow:style.f,
                    flexDirection:'column',
                    alignItems:'center'
                  }

                  return <div

                            onClick={()=>this.props._handleClick(i)}
                            key={this.props.contentsArray[i].title+ Math.random()}
                            style={productStyles}>

                            <h1>{this.props.contentsArray[i].title}</h1>
                              <div

                                style={{
                                  backgroundImage:'url('+this.props.contentsArray[i].previewContents.imageArrayPreview+ ')',
                                  height:window.innerHeight/4.5 +'px',
                                  width: "100%",
                                  backgroundRepeat: 'no-repeat',
                                  backgroundSize:'contain',
                                  backgroundPosition: 'center center'
                                }}>

                              </div>
                            { activeIndex==i? <div style={{
                              display:'flex',
                              color:'#fff',
                              flexDirection:'column',
                              flex:'1'


                            }}>
                          {this.props.children}

                              </div>:null}
                            </div>
                    })}
              </div>
            }
          </StaggeredMotion>
        </div>
      </div>)
    }



  }
  ContentGallery.propTypes={
    contentsArray:PropTypes.array
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
