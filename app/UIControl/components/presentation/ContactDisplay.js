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

        return (<div style={{
          height:'100%',
          width:'100%',
          position:'absolute'}}>
          <div
            style={{
              height:'100%',
            width:'100%',
            position:'absolute',
            backgroundColor:'#000',
            opacity:'.7'}}></div>




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



                                  {({ e,l,h}) =><div style={{

                                    display:"flex",
                                    flexDirection:'column',
                                    flex:1,
                                    justifyContent:'center',
                                    position:'relative',
                                    height:'100%'

                                  }} >
                                  <div
                                    style={{
                                      position:'fixed',
                                      color:this.props.animations == 'contactMeClose'?'red':'#fff',
                                      display:"flex",
                                      right:'4%',
                                      top:'5%',
                                      backgroundColor:'#000',
                                      border:'1px solid #fff',
                                      borderRadius:'5px',
                                      letterSpacing:'4px',
                                      justifyContent:'flex-end',
                                      cursor:'pointer'
                                  }}
                                  onMouseEnter={this.hoverItem.bind(null, 'contactMeClose')}
                                  onMouseLeave={this.hoverItem.bind(null, 'contact none')}
                                    onClick={()=>this.hideContact()}
                                    >
                                    <h3>CLOSE</h3>
                                  </div>
                                  <h1 style={{color:'#eee', justifyContent:'center', display:'flex',marginBottom:'5%'}}>My Contact Info</h1>
                          <div

                            style={{
                            opacity:'1',
                            display:'flex',
                            justifyContents:'space-between',
                            flexDirection:'row',
                            height:'20%',
                            padding:'2%'
                          }}>

                            <div
                              onMouseEnter={this.hoverItem.bind(null, 'contactMelinkedin')}
                              onMouseLeave={this.hoverItem.bind(null, 'contact none')}
                              style={{
                              display:'flex',
                              flex:1,
                              backgroundColor:'#062f4f',
                              border:l+'px solid #fff'
                            }}><div
                              style={{

                                display:'flex',
                                alignItems:'center',
                                flex:1,
                                justifyContent:'center'
                              }}>
                            <a
                              style={{textDecoration:'none',color:'#fff', letterSpacing:'5px'}}
                              href="https://www.linkedin.com/in/bryanschauerte"
                              target="_blank">
                                <h1>LinkedIn</h1>
                                <div style={{
                                  display:'flex',
                                  justifyContent:'center',
                                  cursor:'pointer'}}>
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
                              style={{
                              display:'flex',
                              flex:1,
                              backgroundColor:'#0193b8',
                              border:e+'px solid #fff'
                            }}>
                            <div
                              style={{

                                display:'flex',
                                alignItems:'center',
                                flex:1,
                                justifyContent:'center'}}>
                              <a
                                style={{textDecoration:'none',color:'#fff', letterSpacing:'5px'}}
                                href="mailto:bryan.schauerte@gmail.com?Subject=Hey%20Bryan%20nice%20site"
                                target="_top">
                                  <h1>Email</h1>
                                  <div style={{
                                    display:'flex',
                                    justifyContent:'center',
                                    cursor:'pointer'}}>
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
                              style={{
                              display:'flex',
                              flex:1,
                              backgroundColor:'#813772',
                              border:h+'px solid #fff'
                            }}>
                            <div
                              style={{

                                display:'flex',
                                alignItems:'center',
                                flex:1,
                                justifyContent:'center'
                              }}>
                                <a style={{textDecoration:'none',color:'#fff', letterSpacing:'5px'}}
                                   href='https://github.com/Bryanschauerte' target="_blank">
                                  <h1>Github</h1>
                                  <div style={{
                                    display:'flex',
                                    justifyContent:'center',
                                    cursor:'pointer'}}>
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
