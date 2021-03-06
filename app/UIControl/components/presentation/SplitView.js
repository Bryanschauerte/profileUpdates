import React, {Component} from 'react';
import { Motion, StaggeredMotion, spring } from 'react-motion';
import WildCard from './WildCard.js';
import GalleryHeader from './GalleryHeader'

class SplitView extends Component{
  constructor(props){
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState){

    if(nextProps.animateAbout != this.props.animateAbout){
      return true;
    }
    return false
  }

  render(){
    return (
      <Motion
        defaultStyle={{x: 1000}}
        style={
          {x: spring(0, {stiffness: 120, damping: 17}
          )}}>

          {interpolatingStyle =>  (
              <div
                key={Math.random()}
                id='SplitView'>

                  <div
                    style={{right:interpolatingStyle.x +'px'}}
                    className='innerLeft'>

                    <div
                      className='meDeco'
                      style={{
                        backgroundColor:this.props._accentColor(1, 'notStandard')
                      }}></div>

                    <div className='introduction'>

                      <ul className="list">

                        <h1>Me</h1>
                        <li>Mid-Level Javascript Developer</li>
                        <li>Located in Salt Lake City, UT</li>
                        <li>Background in science and education</li>
                        <li>Ridiculously engrossed in all things ReactJs/Node/AngularJS</li>
                      </ul>

                    </div>
                  </div>
                  <div
                    style={{left:interpolatingStyle.x +'px'}}
                    className='innerRight'>
                    <div
                      className='meDeco'
                      style={{
                        backgroundColor:this.props._accentColor(2, 'notStandard')
                      }}></div>
                    <div className='introduction'>


                        <ul className="list">

                          <h1>This Site</h1>
                          <li>ReactJS frontend, content generated by DB contents(MERN stack)</li>
                          <li>Showcases non-work items</li>
                          <li>Gives advice on best practices</li>
                          <li>Is a place for me to host test items</li>

                        </ul>

                    </div>

                  </div>

                </div>

              )}
              </Motion>)
              }
            }

export default SplitView;
