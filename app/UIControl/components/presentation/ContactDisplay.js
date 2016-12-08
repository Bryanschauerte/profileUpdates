import React,{Component, PropTypes} from 'react';
import DisplaySingleItem from './DisplaySingleItem';
import * as uiActions from '../../actions/index';
import {connect} from 'react-redux';
import { Motion, StaggeredMotion, spring } from 'react-motion';


class ContactDisplay extends Component {


  constructor(props){
    super(props);

    this.hoverItem = this.hoverItem.bind(this);
    this.stopHoverItem = this.stopHoverItem.bind(this);
    this.hideContact = this.hideContact.bind(this);
  }
      hideContact(){
        return this.props.dispatch(uiActions.hideContact());
      }
      hoverItem(hoverID){
        event.preventDefault();

        return this.props.dispatch(uiActions.hoverChange(hoverID));

      }
      stopHoverItem(){
        console.log('CONTACTED STOED IT')
        const hoverID = null;
        return this.props.dispatch(uiActions.hoverChange(hoverID) );
      }




      render(){

        return (<div id="contactDisplay"
          className='contentdispayContainer'
          onMouseLeave={this.hoverItem.bind(null, 'contact none')} >

          <div
            className = 'contentDisCurtain'
            onMouseLeave={this.hoverItem.bind(null, 'contact none')}></div>




                          <Motion
                            defaultStyle={{
                              e:0,
                              l:0,
                              h:0
                              }}
                            style={{

                            l: spring(this.props.animations == 'contactMelinkedin'?  15 : 0,{stiffness: 180, damping: 5}),
                            e:spring(this.props.animations == 'contactMeEmail'? 15:0, {stiffness: 180, damping: 5}),
                            h:spring(this.props.animations == 'contactMeHub'?  15 : 0,{stiffness: 180, damping: 5})

                          }}>



                                  {({ e,l,h}) =><div className='motionCont' >
                                  <div className='motionInnerC'
                                    style={{
                                      color:this.props.animations == 'contactMeClose'?'red':'#fff'
                                    }}
                                  onMouseEnter={this.hoverItem.bind(null, 'contactMeClose')}
                                  onMouseLeave={this.hoverItem.bind(null, 'contact none')}
                                    onClick={()=>this.hideContact()}
                                    >
                                    <h3>CLOSE</h3>
                                  </div>
                                  <h1 className='text'>My Contact Info</h1>
                          <div
                            className='contactContainer'>

                            <div
                              onMouseEnter={this.hoverItem.bind(null, 'contactMelinkedin')}
                              onMouseLeave={this.hoverItem.bind(null, 'contact none')}
                              className='contentCont'
                              style={{
                              border:l+'px solid #fff'
                            }}><div
                                className='linkImgContain'>
                            <a
                              className='link'
                              href="https://www.linkedin.com/in/bryanschauerte"
                              target="_blank">
                                <h1>LinkedIn</h1>
                                <div className='imgCont' >
                                  <img
                                    height='32px'
                                    width='32px'
                                    src='/assets/smPics/linkedin.png'/>
                                </div>
                              </a>
                              </div>
                          </div>

                            <div
                              onMouseEnter={this.hoverItem.bind(null, 'contactMeEmail')}
                              onMouseLeave={this.hoverItem.bind(null, 'contact none')}
                              className='contentCont'
                              style={{
                              backgroundColor:'#0193b8',
                              border:e+'px solid #fff'
                            }}>
                            <div
                              className='linkImgContain'>
                              <a
                                className='link'
                                href="mailto:bryan.schauerte@gmail.com?Subject=Hey%20Bryan%20nice%20site"
                                target="_top">
                                  <h1>Email</h1>
                                  <div className='imgCont' >
                                    <img
                                    height='32px'
                                    width='32px'
                                    src='/assets/smPics/mail-envelope.png'/>
                                  </div>
                              </a>
                          </div>
                            </div>
                            <div
                              onMouseEnter={this.hoverItem.bind(null, 'contactMeHub')}
                              onMouseLeave={this.hoverItem.bind(null, 'contact none')}
                              className='contentCont'
                              style={{
                              backgroundColor:'#813772',
                              border:h+'px solid #fff'
                            }}>
                            <div className='linkImgContain'>
                                <a className='link'
                                   href='https://github.com/Bryanschauerte' target="_blank">
                                  <h1>Github</h1>
                                  <div className='imgCont' >
                                    <img
                                      height='32px'
                                      width='32px'
                                      src='/assets/smPics/github.png'/>
                                  </div>
                                </a>
                            </div>
                            </div>

                      </div>


                    </div>
                              }
                            </Motion>





            </div>)
      }


}

const mapStateToProps = (state)=>{

  return{


    animations: state.uIState.uiStructure.animations.hover
  }
}

const mapDispatchToProps = (dispatch)=>{

  return{
    dispatch
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactDisplay)
